import PropTypes from "prop-types";

function Movie({coverImage, title, summary, genres}) {
  return (
    <div>
      <img src={coverImage} alt={`${title} cover`}/>
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>
        {genres.map(genre => (<li key={genre}>{genre}</li>))}
      </ul>
      <hr/>
    </div>
  );
}

Movie.propTypes = {
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;
