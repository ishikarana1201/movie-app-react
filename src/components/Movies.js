import React from "react";
import { useGlobalContext } from "../context";
import { NavLink } from "react-router-dom";
const Movies = () => {
  const { movie } = useGlobalContext();
  // console.log(movie);
  return (
    <>
      <section className="movie-page">
        <div className="container grid grid-4-col">
          {movie
            ? movie.map((curMovieElem) => {
                const { imdbID, Title, Poster } = curMovieElem;
                const movieName = Title.substring(0, 15);

                return (
                  <NavLink to={`movie/${imdbID}`} key={imdbID}>
                    <div className="card">
                      <div className="card-info">
                        <h2>
                          {movieName.length > 13
                            ? `${movieName}...`
                            : movieName}
                        </h2>
                        <img src={Poster} alt={Title} />
                      </div>
                    </div>
                  </NavLink>
                );
              })
            : ""}
        </div>
      </section>
    </>
  );
};

export default Movies;
