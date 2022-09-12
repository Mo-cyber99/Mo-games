import React, { useState, useEffect } from "react";
import { fetchReviews } from "../utils/API";
import { Spinner } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Reviews.css";
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import {CCard} from '@coreui/react'

export const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sort_by, setSort_By] = useState('');
  const [order_By, setOrder_By] = useState('');
  const { search } = useLocation();
  const categoryNameSearch = search.slice(10, search.length);


  useEffect(() => {
    fetchReviews(categoryNameSearch, sort_by, order_By).then((res) => {
      setReviews(res);
      setIsLoading(false);
    });
  }, [categoryNameSearch, sort_by, order_By]);

  return (
    <>
      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center">
          <Spinner animation="border" size="lg" style={{color: 'white'}} />
        </div>
      ) : null}
      <h1>Reviews</h1>
      <section className="query">
      <FormControl fullWidth>
				<InputLabel className='inputlabel-one' id='demo-simple-select-label'>
					Sort By
				</InputLabel>
				<Select
					className='first-form'
					value={sort_by}
					onChange={(e) => setSort_By(e.target.value)}
					name='reviews'
          >
					<MenuItem value='votes'>Votes</MenuItem>
					<MenuItem value='title'>Title</MenuItem>
				</Select>
				<FormControl fullWidth>
					<InputLabel className='inputlabel' id='demo-simple-select-label'>
						Order By
					</InputLabel>
					<Select
						className='second-form'
						value={order_By}
						onChange={(e) => setOrder_By(e.target.value)}
						name='reviews'
            >
						<MenuItem value='asc'>Ascending</MenuItem>
						<MenuItem value='desc'>Descending</MenuItem>
					</Select>
				</FormControl>
			</FormControl>
            </section>
      <ul>
        {React.Children.toArray(
          reviews.map((review) => {
            return (
              <li className="itemCard" key={review.review_id}>
                <CCard>
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
                    </CCard>
              </li>
            );
          })
        )}
      </ul>
    </>
  );
};
