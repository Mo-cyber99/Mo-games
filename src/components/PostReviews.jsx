import { useState, useContext } from "react";
import { postReviews } from "../utils/API";
import { UserContext } from "../contexts/User";
import { useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { Button } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/PostReviews.css'

export const PostReviews = ({ categories }) => {
  const navigate = useNavigate();

  //eslint-disable-next-line
  const { currUser, setCurrUser } = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [designer, setDesigner] = useState("");
  const [category, setCategory] = useState("strategy");
  const [err, setErr] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [empty, setEmpty] = useState(false);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleDesignerChange = (e) => {
    setDesigner(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.length > 0 && body.length > 0 && designer.length > 0) {
      setIsLoading(true);
      setErr(false);
      postReviews(currUser, title, body, designer, category)
        .then((review) => {
          setIsLoading(false);
          navigate(`/review/${review.review_id}`);
        })
        .catch(() => {
          setIsLoading(false);
          setErr(true);
        });
    } else {
      setEmpty(true);
    }
  };

  return (
    <section className="post-review-link">
      <h2>New Review</h2>
      <h3>Logged in as {currUser}</h3>
      <form onSubmit={handleSubmit}>
        <h3>
          <label htmlFor=".post-review-input">Review Title: </label>
          <input
            id={
              title.length < 1 ? "post-review-input" : "post-review-input-green"
            }
            onChange={handleTitleChange}
          />
        </h3>
        <section>
          <label htmlFor="review-body"></label>
        </section>
        <section>
          <textarea
            id={body.length === 0 ? "comment-body" : "comment-body-green"}
            onChange={handleBodyChange}
            placeholder="Review here..."
          ></textarea>
        </section>
        <section>
          <label htmlFor="post-review-input">Designer: </label>
          <input
            id={
              designer.length < 1
                ? "post-review-input"
                : "post-review-input-green"
            }
            onChange={handleDesignerChange}
            placeholder="Game Designer..."
          />
        </section>
        <br />
        <section>
          <label htmlFor="post-review-category">Category: </label>
          <select
            name="category"
            id="post-review-category"
            onChange={handleCategoryChange}
          >
            {categories.map((category) => {
              return (
                <option key={category} value={category.slug}>
                  {category.slug}
                </option>
              );
            })}
          </select>
        </section>
        <br />
        <section>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </section>
        {empty ? <p>Please fill in all the above fields</p> : null}
        {isLoading ? (
          <div className="d-flex justify-content-center align-items-center">
            <Spinner animation="border" size="lg" style={{ color: "white" }} />
          </div>
        ) : null}
        {err ? <p>Something went wrong, please try again</p> : null}
      </form>
    </section>
  );
};
