import {BASE_URL} from "@/app/(constants)/api";

async function getVideos(id: string) {
  console.log(`Fetching videos: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${BASE_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieVideos({id}: {id: string}) {
   const videos = await getVideos(id);
   return <div>{JSON.stringify(videos)}</div>;
}
