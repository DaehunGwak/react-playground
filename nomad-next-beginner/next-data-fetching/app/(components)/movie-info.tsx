import {BASE_URL} from "@/app/(constants)/api";

async function getMovie(id: string) {
  console.log(`Fetching movies: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`${BASE_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({id}: {id: string}) {
   const movie = await getMovie(id);
   return <h1>{movie.title}</h1>;
}
