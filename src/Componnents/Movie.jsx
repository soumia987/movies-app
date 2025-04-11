import React, { useEffect, useState } from 'react';

function Movie() {
  const [movieList, setMovieList] = useState([]);

  const getMovie = () => {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=930bb7f05f1e8fe59e763a0e6c813609")
      .then(res => res.json())
      .then(json => setMovieList(json.results));
  };

  useEffect(() => {
    getMovie();
  }, []);

  console.log(movieList);

  return (
    <div>
      {movieList.map(movie => (
        <img
         
          style={{ width: "300px", height: "250px", marginLeft: "10px", marginTop: "30px" }}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      ))}
    </div>
  );
}

export default Movie;
