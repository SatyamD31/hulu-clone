import React, { forwardRef } from 'react';
import './VideoCard.css';
import TextTruncate from 'react-text-truncate';
import ThumbsUpSharp from '@material-ui/icons/ThumbUpSharp';

const base_url = "https://image.tmdb.org/t/p/original/";        // base url for image

const VideoCard = forwardRef(({ movie }, ref) => {
    return (
        <div ref={ref} className="video-card">
            {/** some movies have backdrop path, some have poster path. use poster path if backdrop path not found */}
            <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt="Movie Poster" />
            {/* <p>{movie.release_date || movie.first_air_date}</p> */}
            <TextTruncate 
                line={2}                /**  no. of permissible lines to display */
                element="p"             /** tag to use */
                truncateText="...."      /** append ... in the end after truncating */    
                // textTruncateChild={<a href="#"> Continue reading</a>}
                text={movie.overview}   /** text to truncate */
            />
            <h2>{movie.title || movie.original_name}</h2>
            <p className="video-card__stats">
                {movie.media_type && `${movie.media_type} •`}
                {movie.release_date || movie.first_air_date} •
                <ThumbsUpSharp />{" "}
                {movie.vote_count}
            </p>
        </div>
    );
});

export default VideoCard
