import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./movie.css";


function Movie({ id, year, title, summary, poster, genres, rating }) {
  return (
    <Link to={{
      pathname: `/movie/${id}`,
      state: {
        year: year,
        title: title,
        summary: summary,
        poster: poster,
        genres: genres,
        rating: rating,
      }
    }}>
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie_data">
        <div className="title_rating">
          <h3 className="movie_title">{title}</h3>
          <h5 className="movie_rating">{rating}</h5>
        </div>
        <h5 className="movie_year">{year}</h5>
        <ul className="movie_genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres_genre">{genre}</li>
          ))}
        </ul>
        <p className="movie_summary">{summary.slice(0, 180)}...</p>
      </div>
    </div>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
