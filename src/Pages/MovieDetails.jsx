import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function MovieDetails() {
    const api_key = '930bb7f05f1e8fe59e763a0e6c813609';
    const Base_URL = "https://api.themoviedb.org/3";
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`${Base_URL}/movie/${id}?api_key=${api_key}`)
            .then(res => res.json())
            .then(data => {
                setMovie(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error("Error fetching movie details:", error);
                setIsLoading(false);
            });
    }, [id]);

    if (isLoading) {
        return <div className="text-white text-center py-8">Loading...</div>;
    }

    if (!movie) {
        return <div className="text-white text-center py-8">Movie not found</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8 text-white">
        </div>
    );
}