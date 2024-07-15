import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import "./Trailer.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Trailer = () => {
  let params = useParams();
  let key = params.ytTrailerId;
  const navigate = useNavigate();

  return (
    <Container className="trailer-container">
      <Button
        variant="outline-light"
        className="back-button"
        onClick={() => navigate(-1)}
      >
        Back
      </Button>
      <div className="react-player-wrapper">
        {key != null ? (
          <ReactPlayer
            controls={true}
            playing={true}
            url={`https://www.youtube.com/watch?v=${key}`}
            width="100%"
            height="100%"
            className="react-player"
          />
        ) : null}
      </div>
    </Container>
  );
};

export default Trailer;
