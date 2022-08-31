import React, { useState, useEffect } from "react";
import { fetchReviews } from "../utils/API";
import { SortBy } from "./Queries/SortBy";
import { Spinner } from "react-bootstrap";
import { Link, useSearchParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Reviews.css";

export const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortByValue, setSortByValue] = useState("created_at");
  const [orderByValue, setOrderByValue] = useState("desc");
  const [searchTerm, setSearchTerm] = useSearchParams({
    sort_by: "",
    order: "",
  });

  useEffect(() => {
    fetchReviews().then((reviews) => {
      setReviews(reviews);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center">
          <Spinner animation="border" size="lg" style={{color: 'white'}} />
        </div>
      ) : null}
      <h1>Reviews</h1>
       <SortBy
          sortByValue={sortByValue}
          setSortByValue={setSortByValue}
          setSearchTerm={setSearchTerm}
        />
      <ul>
        {React.Children.toArray(
          reviews.map((review) => {
            return (
              <li className="itemCard" key={review.review_id}>
                <Link
                  to={`/reviews/${review.review_id}`}
                  key={review.review_id}
                >
                  <h2 className="review-title">
                    {review.review_id}: {review.title}
                  </h2>
                  <img
                    src={review.review_img_url}
                    alt={review.title}
                    className="reviewsImage"
                  />
                </Link>
                <h3 className="review-votes">Votes:{review.votes}</h3>
                <h4 className="review-owner"> {review.owner}</h4>
                <p className="review-category">{review.category}</p>
              </li>
            );
          })
        )}
      </ul>
    </>
  );
};
