import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = ({ movie }) => {
    return (
        <div className="movie">
            <div>
                <h3>{movie.Title}</h3>
            </div>
            <div>
                <img 
                    src={movie.Poster !== 'N/A' ? movie.Poster : "https://via.placeholder.com/400"} 
                    alt={movie.Title} 
                />
            </div>
            <div>
                <span>{movie.Type}</span>
            </div>
        </div>
    );
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        Poster: PropTypes.string.isRequired,
        Type: PropTypes.string.isRequired,
    }).isRequired,
};

export default MovieCard;
