import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { fetchReviewsByID } from "../utils/API";
import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/Reviews.css'

export const SingleReview = () => {
  const { review_id } = useParams();

  const [singleReview, setSingleReview] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchReviewsByID(review_id).then((ReviewById) => {
      setSingleReview(ReviewById.review);
      setIsLoading(false);
    });
  }, [review_id]);

  return (
    <>
      {isLoading ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" size="lg" />
        </div>
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
          <p>
            <h3 className="review-votes">Votes:{singleReview.votes}</h3>
            <h4 className="review-owner"> {singleReview.owner}</h4>
            <p className="review-category">{singleReview.category}</p>
          </p>
        </li>
      </div>
    </>
  );
};
