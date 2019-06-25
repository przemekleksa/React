import React from 'react';
import { Link } from 'react-router-dom';
import './movieList.scss';

const MovieList = (props) => {
    return ( 
        <div className="movie-item">
            <div className="poster">
                <Link to={`/movie/${props.movie.clean_name}`} >
                    <img src={props.movie.poster} alt={props.movie.name} />
                </Link>
            </div>
            <div className="title">
                <Link to={`/movie/${props.movie.clean_name}`} >
                    <h2>{props.movie.name}</h2>
                </Link>
            </div>
            <div className="details">
                <h4>Year: {props.movie.year} Duration: {props.movie.duration} minutes</h4>
            </div>
            
        </div>
     );
}
 
export default MovieList;