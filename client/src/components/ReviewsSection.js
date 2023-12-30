import React, { useState, useEffect } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { fetchReviews } from "../components/http/reviewsApi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';

const ReviewsSection = ({ serviceId }) => {
  const [reviews, setReviews] = useState({ ServiceReviews: [] });
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchReviews(serviceId)
      .then((data) => setReviews(data))
      .catch((error) => {
        setError(error.message);
      });
  }, [serviceId]);

  return (
    <Card>
      {error ? (
        <Card.Body>{error}</Card.Body>
      ) : (
        <ListGroup variant="flush">
          {reviews.ServiceReviews.length > 0 ? (
            reviews.ServiceReviews.map((review) => (
              <ListGroup.Item key={review.review_id}>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p>{review.review_text}</p>
                    <div className="text-warning">
                      {renderStars(review.rating)}
                    </div>
                    <div className="text-muted">By: {review.User?.first_name + " " + review.User?.last_name}</div>
                  </div>
                  <div className="text-muted">{formatDate(review.review_date)}</div>
                </div>
              </ListGroup.Item>
            ))
          ) : (
            <Card.Body>No reviews available</Card.Body>
          )}
        </ListGroup>
      )}
    </Card>
  );
};

const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FontAwesomeIcon icon={faStar} key={i} />);
  }

  if (hasHalfStar) {
    stars.push(<FontAwesomeIcon icon={faStarHalf} key="half" />);
  }

  return stars;
};

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export default ReviewsSection;
