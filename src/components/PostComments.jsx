import React, { useState } from "react";
import { Button } from '@mui/material';
import { useParams, useNavigate, Link } from "react-router-dom";
import { postComments } from "../utils/API";
import "../css/PostComments.css";

export const PostComments = () => {
    const { review_id } = useParams();
    const [newComment, setNewComment] = useState({
		author: 'guest',
		body: '',
	});
	const navigate = useNavigate();
	const handleChange = (e) => {
		setNewComment((currComment) => {
			const newCommentItem = { ...currComment };
			newCommentItem[e.target.name] = e.target.value;
			return newCommentItem;
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		postComments(review_id, newComment).then((res) => {
		});
		setNewComment({
			author: 'guest',
			body: '',
		});
		navigate(`/reviews/${review_id}/comments`);
	};

	return (
		<div>
			<form className='postComments-form' onSubmit={handleSubmit}>
				<h3 className='post-comment-title'>Add your Comment!</h3>
				<div className='input-div'>
					<label className='body-label'>Comment</label>
					<br />
					<input
						className='body-input'
						onChange={handleChange}
						value={newComment.body}
						type='text'
						name='body'
                        required
					/>
				</div>
				<br />

				<Button variant='contained' type='submit'>
					Submit
				</Button>
			<li>
			<Link className="comment-link" to={`/reviews/${review_id}/comments`}>
        <Button variant='contained'>Load Comments</Button>
      </Link>
			</li>
			</form>
		</div>
	);

};
