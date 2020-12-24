import React, { useState, useEffect } from "react";

export const Main = () => {
    
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=1a478c5a942e5dfb7becd6a6800e2543')
            .then((res) => res.json())
            .then((data) => {
                if (!data.errors) {
                    setMovies(data.results);
                } else {
                    setMovies([]);
                }
              });
    });
    
    return (
        <div className="movie-page">
        <div className="container">
        <div className="header">
          <h1 className="heading"> Popular Movies</h1>
        </div>

          {movies.length > 0 ? (
            <div className="movie-grid">
              {movies.map((movie) => (
                <div className="movie-card">
                <div className="overlay"></div>
          
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={`${movie.title} Poster`}
                />
              </div>
              ))}
            </div>
          ) : (
            <h2 className="no-movies">No movies in your list! Add some!</h2>
          )}
        </div>
      </div>
    )
}
