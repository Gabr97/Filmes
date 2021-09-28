import "./favorites.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieModal from "../modal/Modal";

const Favorites = (props) => {
  const [movies, setMovies] = useState([]);
  //   const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [movie, setMovie] = useState({
      id: props.id,
      name: props.name,
      director: props.director,
      releaseYear: props.releaseYear,
      onList: props.onList,
      urlImage: props.urlImage,
      genre: props.genre,
      synopsis: props.synopsis,
      modalImage: props.modalImage,
  })

  const getMovies = async () => {
    const res = await axios.get("http://localhost:8080/movies");
    const movies = res.data;
    setMovies(movies);
  };

  const favoriteMovies = movies.filter((movie) => {
    if (movie.onList) return movie;
  });


  useEffect(() => {
    getMovies();
  }, []);

  const [movieModal, setMovieModal] = useState(false);

  const toggleMovieModal = (fav) => {

    setMovie(fav)
    
    setMovieModal(!movieModal);
  };

  const removeFromFavorites = (movie) => {
    axios.put(`http://localhost:8080/movies/${movie.id}`, {
      id: movie.id,
      name: movie.name,
      director: movie.director,
      releaseYear: movie.releaseYear,
      onList: !movie.onList,
      urlImage: movie.urlImage,
      genre: movie.genre,
      synopsis: movie.synopsis,
      modalImage: movie.modalImage,
    });

    setMovie({
      id: movie.id,
      name: movie.name,
      director: movie.director,
      releaseYear: movie.releaseYear,
      onList: false,
      urlImage: movie.urlImage,
      genre: movie.genre,
      synopsis: movie.synopsis,
      modalImage: movie.modalImage,
    });
  };


  return (
    <>
      <div className="fav-container">
        <h2
          style={{
            color: "#FFF",
            display: "flex",
            fontSize: "2.5rem",
            cursor: "pointer",
          }}
        >
          My Favorites
        </h2>
        <div className="row">
          {favoriteMovies.map((fav, index) => {
            return (
              <div
                onClick={() =>
                  toggleMovieModal({
                    ...fav,
                  })
                }
                key={index}
                className="col-xl-2 col-lg-3 col-sm-5 col-xs-6 fav"
                style={{
                  backgroundColor: "red",
                  marginBottom: "1rem",
                  marginRight: "1rem",
                  backgroundImage: `url(${fav.urlImage})`,
                }}
              >
                {fav.name}
              </div>
            );
          })}
        </div>
        <MovieModal
          isOpen={movieModal}
          toggle={toggleMovieModal}
          name={movie.name}
          director={movie.director}
          releaseYear={movie.releaseYear}
          genre={movie.genre}
          synopsis={movie.synopsis}
          modalImage={movie.modalImage}
          id={movie.id}
          onList={movie.onList}
          urlImage={movie.urlImage}
          removeFromFavorites={removeFromFavorites}

          // addToFavorites={addToFavorites}
        />
      </div>
    </>
  );
};

export default Favorites;
