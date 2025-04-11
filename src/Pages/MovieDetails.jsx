import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function MovieDetails() {
    const api_key = '930bb7f05f1e8fe59e763a0e6c813609';
    const Base_URL = "https://api.themoviedb.org/3";
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`${Base_URL}/movie/${id}?api_key=${api_key}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch movie details');
                }
                return res.json();
            })
            .then(data => {
                setMovie(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error("Error fetching movie details:", error);
                setError(error.message);
                setIsLoading(false);
            });
    }, [id]);

    if (isLoading) {
        return <div className="text-white text-center py-8">Loading...</div>;
    }

    if (error) {
        return <div className="text-white text-center py-8">Error: {error}</div>;
    }

    if (!movie) {
        return <div className="text-white text-center py-8">Movie not found</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8 text-white">
            <Link to="/" className="inline-flex items-center text-cyan-400 mb-6">
                <span className="mr-2">←</span> Back to Home
            </Link>
            
            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                    {movie.poster_path && (
                        <img
                            className="w-full rounded-lg shadow-lg"
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title || 'Movie poster'}
                        />
                    )}
                </div>
                
                <div className="md:w-2/3">
                    <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
                    
                    <div className="flex items-center gap-4 mb-4">
                        {movie.vote_average && (
                            <span className="text-yellow-400">★ {movie.vote_average.toFixed(1)}</span>
                        )}
                        {movie.release_date && <span>{movie.release_date}</span>}
                        {movie.runtime && <span>{movie.runtime} minutes</span>}
                    </div>
                    
                    {movie.genres && movie.genres.length > 0 && (
                        <div className="mb-6">
                            {movie.genres.map(genre => (
                                <span 
                                    key={genre.id} 
                                    className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm mr-2 mb-2"
                                >
                                    {genre.name}
                                </span>
                            ))}
                        </div>
                    )}
                    
                    <h2 className="text-xl font-semibold mb-2">Overview</h2>
                    <p className="mb-6">{movie.overview || 'No overview available.'}</p>
                    
                    {movie.homepage && (
                        <a 
                            href={movie.homepage} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded transition-colors"
                        >
                            Official Website
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}