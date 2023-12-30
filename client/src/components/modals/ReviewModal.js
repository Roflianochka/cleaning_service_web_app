import React, { useEffect, useState } from "react"
import { Modal, Alert, Spinner } from "react-bootstrap"
import { Button, Form } from 'react-bootstrap';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

import { addFeedback, deleteReview, getOneReview } from "../http/reviewsApi";
import { jwtDecode } from "jwt-decode";
import Rating from 'react-rating';

const ReviewModal = ({ show = false, hide, id, updId }) => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const [reviewData, setReviewData] = useState();

    useEffect(() => {
        if (updId) {
            getOneReview(updId)
                .then((data) => setReviewData(data))
                .catch((error) => setError(error.message))
                .finally(() => setIsLoading(false));
        } else {
            setIsLoading(false);
        }
    }, [updId]);

    const addReviewFunction = () => {
        const userId = jwtDecode(localStorage.getItem('token')).userId;
        const feedbackData = {
            userId: userId,
            service_id: reviewData ? reviewData.service_id : id,
            rating: rating ? rating : (reviewData ? reviewData.rating : 0),
            review_text: comment ? comment : (reviewData ? reviewData.comment : ''),
            review_date: new Date()
        };

        if (reviewData) {
            deleteReview(reviewData.id)
                .then(() => {
                    addFeedback(feedbackData)
                        .then(() => hide())
                        .catch((error) => setError(error.message));
                })
                .catch((error) => setError(error.message));
        } else {
            addFeedback(feedbackData)
                .then(() => hide())
                .catch((error) => setError(error.message));
        }
        // updateReviews();
    };

    const handleRatingChange = (value) => {
        setRating(value);
    };


    return (
        <>
            <Modal show={show} onHide={hide}>
                <Modal.Header closeButton>
                    <Modal.Title>{updId ? "Изменить отзыв" : "Оставить отзыв"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form>
                        {isLoading ? (
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        ) : (
                            <>
                                <Form.Control
                                    placeholder={reviewData ? reviewData.comment : "Комментарий"}
                                    type="text"
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                />
                                <div className="d-flex mt-1 justify-content-center">
                                    {/* <p className="ms-1">Оценка: </p> */}
                                    <Rating
                                        initialRating={reviewData ? reviewData.rating : rating}
                                        onChange={handleRatingChange}
                                        emptySymbol={<FontAwesomeIcon icon={regularStar} style={{ color: "#ccc" }} />}
                                        fullSymbol={<FontAwesomeIcon icon={solidStar} style={{ color: "#ffc107" }} />}
                                    />
                                </div>
                            </>
                        )}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={hide}>
                        Отмена
                    </Button>
                    {updId ? (
                        <Button variant="primary" onClick={addReviewFunction}>
                            Изменить
                        </Button>
                    ) : (
                        <Button variant="primary" onClick={addReviewFunction}>
                            Ок
                        </Button>
                    )}
                </Modal.Footer>
            </Modal>
        </>);
}

export default ReviewModal;