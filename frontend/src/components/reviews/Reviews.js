import { useEffect, useRef } from "react";
import api from "../../api/axiosConfig";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import ReviewForm from "../reviewForm/ReviewForm";
import "./Reviews.css";

import React from "react";

const Reviews = ({ getMovieData, movie, reviews, setReviews }) => {
  const revText = useRef();
  let params = useParams();
  const movieId = params.movieId;

  useEffect(() => {
    getMovieData(movieId);
  }, [getMovieData, movieId]);

  const addReview = async (e) => {
    e.preventDefault();

    const rev = revText.current;

    try {
      const response = await api.post("/api/v1/reviews", {
        reviewBody: rev.value,
        imdbId: movieId,
      });

      const updatedReviews = [...reviews, { body: rev.value }];

      rev.value = "";

      setReviews(updatedReviews);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container className="reviews-container">
      <Row>
        <Col>
          <Button
            variant="outline-light"
            className="back-button"
            onClick={() => window.history.back()}
          >
            Back
          </Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={4}>
          <Image
            src={movie?.poster}
            alt={movie?.title}
            fluid
            className="movie-poster"
          />
        </Col>
        <Col md={8}>
          <h3 className="reviews-title">Reviews for {movie?.title}</h3>
          <ReviewForm
            handleSubmit={addReview}
            revText={revText}
            labelText="Write a Review?"
          />
          <hr />
          <div className="reviews-list">
            {reviews?.map((r, index) => (
              <div key={index} className="review">
                <p>{r.body}</p>
                <hr />
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Reviews;
