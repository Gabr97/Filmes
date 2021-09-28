import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./test.css";
import axios from "axios";
import MovieModal from "../components/modal/Modal";
import "../components/modal/modal.css";

const Test = (props) => {
  const [movies, setMovies] = useState([]);

  const [movie, setMovie] = useState({
    id: props.id,
    name: props.name,
    director: props.director,
    releaseYear: props.releaseYear,
    image: props.urlImage,
    onList: props.onList,
    genre: props.genre,
    modalImage: props.modalImage,
    synopsis: props.synopsis,
  });

  const [onList, setOnList] = useState(false);

  const fetchMovies = async () => {
    const res = await axios.get("http://localhost:8080/movies");
    const movies = res.data;
    setMovies(movies);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const action = movies.filter((movie) => {
    return movie.genre.toLowerCase().includes("action");
  });

  const sciFi = movies.filter((movie) => {
    return movie.genre.toLowerCase().includes("science");
  });

  const horror = movies.filter((movie) => {
    return movie.genre.toLowerCase().includes("horror");
  });

  const drama = movies.filter((movie) => {
    return movie.genre.toLowerCase().includes("drama");
  });

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 2 },
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

  const addToFavorites = (movie) => {
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
      onList: true,
      urlImage: movie.urlImage,
      genre: movie.genre,
      synopsis: movie.synopsis,
      modalImage: movie.modalImage,
    });
  };

  const template = (props) => {
    return (
      <div
        onClick={() =>
          toggleMovieModal({
            ...props,
          })
        }
        style={{ backgroundImage: `url(${props.urlImage})` }}
      >
        <h1>{props.name}</h1>
      </div>
    );
  };

  const actionMovies = action.map((item) => {
    return template(item);
  });

  const sciFiMovies = sciFi.map((item) => {
    return template(item);
  });

  const horrorMovies = horror.map((item) => {
    return template(item);
  });

  const dramaMovies = drama.map((item) => {
    return template(item);
  });

  const [movieModal, setMovieModal] = useState(false);

  const toggleMovieModal = (movie) => {
    setMovie(movie);
    setMovieModal(!movieModal);
  };

  return (
    <>
      <div className="container">
        <div>
          <div style={{ display: "flex", color: "#FFF" }}>
            <h1>Best on Action:</h1>
          </div>

          
          <AliceCarousel
            infinite={true}
            autoPlayInterval={2000}
            autoPlay
            mouseTracking
            items={actionMovies}
            responsive={responsive}
            controlsStrategy="alternate"
            disableButtonsControls={false}
            disableDotsControls={true}
            paddingLeft={20}
            paddingRight={20}
          />
          
        </div>
        <div>
          <div style={{ display: "flex", color: "#FFF" }}>
            <h1>Sci-Fi:</h1>
          </div>
          <AliceCarousel
            infinite={true}
            autoPlayInterval={2000}
            autoPlay
            mouseTracking
            items={sciFiMovies}
            responsive={responsive}
            controlsStrategy="alternate"
            disableButtonsControls={false}
            disableDotsControls={true}
            paddingLeft={20}
            paddingRight={20}
          />
        </div>
        <div>
          <div style={{ display: "flex", color: "#FFF" }}>
            <h1>Horror:</h1>
          </div>
          <AliceCarousel
            infinite={true}
            autoPlayInterval={2000}
            autoPlay
            mouseTracking
            items={horrorMovies}
            responsive={responsive}
            controlsStrategy="alternate"
            disableButtonsControls={false}
            disableDotsControls={true}
            paddingLeft={20}
            paddingRight={20}
          />
        </div>
        <div>
          <div style={{ display: "flex", color: "#FFF" }}>
            <h1>Drama:</h1>
          </div>
          <AliceCarousel
            infinite={true}
            autoPlay
            mouseTracking
            autoPlayInterval={2000}
            items={dramaMovies}
            responsive={responsive}
            controlsStrategy="responsive"
            disableDotsControls={true}
            disableButtonsControls={false}
            paddingLeft={20}
            paddingRight={20}
          />
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
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
        />
      </div>
    </>
  );
};

export default Test;
