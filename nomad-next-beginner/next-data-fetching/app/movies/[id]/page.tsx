import {BASE_URL} from "@/app/(constants)/api";

async function getMovie(id: string) {
  console.log(`Fetching movies: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${BASE_URL}/${id}`);
  return response.json();
}

async function getVideos(id: string) {
  console.log(`Fetching videos: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${BASE_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieDetail({
  params: {id},
}: {
  params: { id: string };
}) {
  console.log("===========");
  console.log("start fetching");
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  console.log("end fetching");

  return (
    <>
      <h1>{movie.title}</h1>
      <div>{JSON.stringify(videos)}</div>
    </>
  );
}
