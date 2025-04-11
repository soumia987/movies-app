import React from "react";
import MovieList from "./MovieList";

function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-orange-500 mb-8">Popular Movies</h1>
      <MovieList />
    </div>
  );
}

export default Home;