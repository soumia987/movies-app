import React, { useEffect, useState } from 'react';


const   api_key = '930bb7f05f1e8fe59e763a0e6c813609';
const Base_URL = "https://api.themoviedb.org/3";

function Movie() {
  const [movieList, setMovieList] = useState([]);

  const getMovie = () => {
    fetch(`${Base_URL}/discover/movie?${api_key}`)
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
