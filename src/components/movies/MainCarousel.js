import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "./main.css";
import axios from "axios";

const MainCarousel = () => {
  const [movies, setMovies] = useState([]);

  const getData = async () => {
    const res = await axios.get("http://localhost:8080/movies");
    const data = res.data;
    setMovies(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const template = (props) => {
    return (
      <div style={{ backgroundImage: `url(${props.urlImage})` }}>
        <h1>{props.name}</h1>
      </div>
    );
  };
  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 4 },
  };

  const allMovies = movies.map((item) => {
    return template(item);
  });

  return (
    <>
      <div className="main">
        <div className="head">
          <h1>Available Movies</h1>
        </div>
        <div>
          <AliceCarousel
            autoPlayInterval={2000}
            autoPlay
            mouseTracking
            items={allMovies}
            responsive={responsive}
            controlsStrategy="alternate"
            disableButtonsControls={true}
            infinite={true}
            autoHeight={false}
            autoWidth={false}
            paddingLeft={50}
            paddingRight={50}
          />
        </div>
      </div>
    </>
  );
};

export default MainCarousel;
