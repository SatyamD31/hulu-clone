import React, { useState, useEffect } from 'react';
import './Results.css';
import VideoCard from './VideoCard';
import axios from './axios';
import FlipMove from 'react-flip-move';

function Results({ selectedOption }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // use async funuction whenever making calls/requests to server
        async function fetchData() {
            const request = await axios.get(selectedOption);        // selectedOption is a parameter outside useEffect, hence it needs to be mentioned in line 18
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [selectedOption])

    return (
        <div className="results">
            <FlipMove>
                {movies.map((movie) => (
                    <VideoCard key={movie.id} movie={movie} />
                ))}
            </FlipMove>
        </div>
    );
}

export default Results;