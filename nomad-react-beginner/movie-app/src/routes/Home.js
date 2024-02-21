import {useEffect, useState} from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
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

  return (
    <div className={styles.container}>
      {
        loading
          ? <div className={styles.loader}>
            <span>Loading</span>
          </div>
          : <div className={styles.movies}>
            {
              movies.map((movie) =>
                <Movie
                  key={movie.id}
                  id={movie.id}
                  coverImage={movie.medium_cover_image}
                  title={movie.title}
                  summary={movie.summary}
                  genres={movie.genres}
                  year={movie.year}
                />
              )
            }
          </div>
      }
    </div>
  );
}

export default Home;