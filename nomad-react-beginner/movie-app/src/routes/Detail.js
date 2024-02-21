import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Movie from "../components/Movie";

function Detail() {
  const {id} = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    const fetchMovieDetail = async () => {
      const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
      const json = await response.json();
      setMovie(json.data.movie);
    }

    fetchMovieDetail();
  }, [id]);

  return (
    <div>
      <h1>Detail: {id}</h1>
      {
        movie === undefined ?
          <h3>Loading...</h3> :
          <Movie
            summary={movie.description_full}
            genres={movie.genres}
            coverImage={movie.medium_cover_image}
            id={movie.id}
            title={movie.title}
            year={movie.year}
          />
      }
    </div>
  );
}

export default Detail;
