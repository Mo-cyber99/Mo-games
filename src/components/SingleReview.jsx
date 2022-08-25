import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { fetchReviewsByID, updateVotes } from "../utils/API";
import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/Reviews.css'

export const SingleReview = () => {
  const { review_id } = useParams();

  const [singleReview, setSingleReview] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [vote, setVote] = useState(0)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    fetchReviewsByID(review_id).then((ReviewById) => {
      setSingleReview(ReviewById.review);
      setIsLoading(false);
    });
  }, [review_id]);

  const handleIncrementedVotes = () => {
    setVote((currCount) => {
      return currCount + 1;
    });
    updateVotes(review_id, 1).catch((error) => {
      if (error) {
        setIsError(true)
        setVote((currCount) => {
          return currCount - 1
        });
      }
    });
  };

  const handleDecrementedVotes = () => {
    setVote((currCount) => {
     return currCount - 1;
    });
    updateVotes(review_id, -1).catch((error) => {
      if (error) {
        setIsError(true)
        setVote((currCount) => {
          return currCount + 1
        });
      }
    });
  };

  return (
    <>
      {isLoading ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" size="lg" />
        </div>
      ) : isError ? (
        <p>ERROR please try again</p>
      ) : null}
      <div>
        <li className="itemCard">
          <h2 className="review-title">{singleReview.title}</h2>
          <img
            src={singleReview.review_img_url}
            alt={singleReview.title}
            className="reviewsImage"
          />
          <p className="reviews-title">{singleReview.review_body}</p>
            <h3 className="review-votes">Votes:{singleReview.votes + vote}</h3>
            <button onClick={handleIncrementedVotes}>👍</button>
            <button onClick={handleDecrementedVotes}>👎</button>
            <h4 className="review-owner"> {singleReview.owner}</h4>
            <p className="review-category">{singleReview.category}</p>
        </li>
      </div>
    </>
  );
};
