// import "./modal.css";
import "./styles.css";
import {
  Modal,
  ModalBody,
  ModalHeader,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";
import { Button } from "bootstrap";
import { useState } from "react";

const MovieModal = (props) => {
  // const [movie, setMovie] = useState({
  //   id: props.id,
  //   name: props.name,
  //   director: props.director,
  //   year: props.releaseYear,
  //   onList: props.onList,
  //   image: props.urlImage,
  //   synopsis: props.synopsis,
  //   modalImage: props.modalImage,
  // });

  return (
    <div className="container">
      <Modal
        modalTransition={{ timeout: 700 }}
        backdropTransition={{ timeout: 1300 }}
        className="modal"
        isOpen={props.isOpen}
        toggle={props.toggle}
        className={"modal-info modal-xl " + props.className}
      >
        <div className="content">
          <div className="title">
            <p>{props.name}</p>
          </div>
          <ModalBody
            style={{
              backgroundImage: `linear-gradient(rgba(1, 1, 2, 0.5),rgba(0, 0, 0, 0.5)),url(${props.modalImage})`,
            }}
            className="body"
          >
            <div className="container info">
              <h1>{props.year}</h1>
              <p className="synopsis">{props.synopsis}</p>
              <div style={{ marginTop: "50px" }}>
                <p className="small-info">Directed by</p>
                {props.director}
              </div>
            </div>
          </ModalBody>
          <div className="modalBtn">
            {!props.onList ? (
              <button
                onClick={() =>
                  props.addToFavorites({
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
                }
                style={{
                  backgroundColor: "rgb(20, 65, 110)",
                  color: "#FFF",
                  padding: "15px 50px 15px 50px",
                  borderRadius: "2%",
                }}
                className="btn btn-sm "
              >
                add to favorites
              </button>
            ) : (
              <button
                onClick={() =>
                  props.removeFromFavorites({
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
                }
                style={{
                  //   backgroundColor: "rgb(20, 65, 110)",
                  color: "#FFF",
                  padding: "15px 50px 15px 50px",
                  borderRadius: "2%",
                }}
                className="btn btn-danger btn-sm "
              >
                remove from favorites
              </button>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MovieModal;
