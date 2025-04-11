// Components/MovieList.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function MovieList() {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getMovie = () => {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=930bb7f05f1e8fe59e763a0e6c813609")
      .then(res => res.json())
      .then(json => {
        setMovieList(json.results);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getMovie();
  }, []);

  if (isLoading) {
    return <div className="text-white text-center py-8">Loading...</div>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {movieList.map(movie => (
        <Link to={`/movie/${movie.id}`} key={movie.id} className="group">
          <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105">
            <img
              className="w-full h-auto"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <h3 className="text-white font-semibold">{movie.title}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default MovieList;