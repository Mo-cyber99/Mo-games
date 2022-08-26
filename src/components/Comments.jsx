import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { fetchCommentsByID } from "../utils/API";
import { Button } from "@mui/material";
// import { Spinner } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Comments.css";

export const Comments = () => {
  const { review_id } = useParams();

  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCommentsByID(review_id).then((commentsReview) => {
      setComments(commentsReview);
      setIsLoading(false);
    });
  }, [review_id]);

  if (isLoading) {
    return <p>Loading...</p>
  }

  return comments.length === 0 ? (
    <div>
        <p className='loading'>No Comments </p>
        <Link className='comment-link' to={`reviews/${review_id}/newcomments`}>
            <Button className='post-comment-btn' variant='outlined'>
                Post a Comment
            </Button>
        </Link>
    </div>
) : (
    <div>
    <h1>Comments</h1>
    <ul>
        {comments.map((comment) => {
            console.log(comment);
            return (
                <>
                    <li key={comment.comment_id} className="comments-container">
                        <h4>{comment.author}</h4>
                        <p>{comment.body}</p>
                        <h5>{comment.created_at}</h5>
                    </li>

                </>
            );
        })}
    </ul>
</div>
  );
};
