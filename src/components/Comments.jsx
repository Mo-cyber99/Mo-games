import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { fetchCommentsByID } from "../utils/API";
import { dateCalculator } from "../utils/dateFormatter";
import { DeleteComments } from "./DeleteComments";
import { Button } from "@mui/material";
// import { Spinner } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Comments.css";


export const Comments = () => {
  const { review_id } = useParams();
  
  // eslint-disable-next-line
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
    const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    fetchCommentsByID(review_id).then((commentsReview) => {
      setComments(commentsReview);
      setIsLoading(false);
    });
  }, [review_id, comments]);

  const sortedComments = [...comments].sort((a, b) => {
    let da = new Date(a.created_at),
      db = new Date(b.created_at);
    return db - da;
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return comments.length === 0 ? (
    <div>
      <p className="loading">No Comments </p>
      <li>
      <Link to={`reviews/${review_id}/newcomments`}>
        <Button className="post-comment-btn" variant="outlined">
          Post a Comment
        </Button>
      </Link>
      </li>
      <Link
                  
                  to={`/reviews/${review_id}`}
                  >
                  <Button variant="outlined">Load Review</Button>
                </Link>
    </div>
  ) : (
    <div>
      <h1>Comments</h1>
      
      <ul>
      {deleted ? <p>Comment Deleted!</p>: null}
        {sortedComments.map((comment) => {
          return (
            <>
              <li key={comment.comment_id} className="comments-container">
                <h4>{comment.author}</h4>
                <p>{comment.body}</p>
                <h5>{dateCalculator(comment.created_at)}</h5>
                {comment.author === 'guest' ? <DeleteComments comment_id={comment.comment_id} setDeleted={setDeleted}/>: null}
              </li>
              
            </>
          );
        })}
      </ul>
      <li>
      <Link to={`reviews/${review_id}/newcomments`}>
        <Button className="post-comment-btn" variant="outlined">
          Post a Comment
        </Button>
      </Link>
      </li>
      <Link
                  className="comment-link"
                  to={`/reviews/${review_id}`}
                >
                  <Button variant="outlined">Load Review</Button>
                </Link>
    </div>
    
  );
};
