export const metadata = {
  title: "Home"
};

const BASE_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

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
      <span>{
        JSON.stringify(movies)
      }</span>
    </>
  );
}
