import React, { useState } from "react";
import { Button } from '@mui/material';
import { useParams, useNavigate } from "react-router-dom";
import { postComments } from "../utils/API";
import "../css/PostComments.css";

export const PostComments = () => {
    const { review_id } = useParams();
    const [newComment, setNewComment] = useState({
		author: 'tickle122',
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
			console.log(res);
		});
		setNewComment({
			author: 'tickle122',
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
			</form>
		</div>
	);

};
