import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({id, coverImage, title, summary, genres, year}) {
  return (
    <div className={styles.movie}>
      <img src={coverImage} alt={`${title} cover`} className={styles.movieImg}/>
      <div>
        <h2 className={styles.movieTitle}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <h3 className={styles.movieYear}>{year}</h3>
        <p>{
          summary.length > 235 ? `${summary.slice(0, 235)}...` : summary
        }</p>
        <ul className={styles.movieGenres}>
          {genres.map(genre => (<li key={genre}>{genre}</li>))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  year: PropTypes.number.isRequired,
}

export default Movie;
