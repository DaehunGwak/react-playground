import {useEffect, useState} from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year"
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  }

  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);

  return (
    <div>
      {
        loading
          ? <h1>Loading...</h1>
          : <div>
            {
              movies.map((movie) => (
                <div key={movie.id}>
                  <img src={movie.medium_cover_image} alt={`${movie.name} medium cover`}/>
                  <h2>{movie.title}</h2>
                  <p>{movie.summary}</p>
                  <ul>
                    {movie.genres.map(genre => (<li key={genre}>{genre}</li>))}
                  </ul>
                  <hr/>
                </div>
              ))
            }
          </div>
      }
    </div>
  );
}

export default App;
