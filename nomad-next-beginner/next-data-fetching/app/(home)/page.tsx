import Link from "next/link";
import {BASE_URL} from "@/app/(constants)/api";

export const metadata = {
  title: "Home"
};

async function getMovies() {
  // automatic caching from next
  console.log('im fetching');
  await new Promise(resolve => setTimeout(resolve, 5000));
  const response = await fetch(BASE_URL);
  const json = await response.json();
  console.log('fetching done');
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();

  return (
    <>
      <h1>Home Page</h1>
      <ul>
        {movies.map((movie: {id: number, title: string}) => (
          <li key={movie.id}>
            <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
