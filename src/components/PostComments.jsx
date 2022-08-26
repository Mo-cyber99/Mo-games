import React, { useState } from "react";
import { Button } from '@mui/material';
import { useParams, useNavigate } from "react-router-dom";
import { postComments } from "../utils/API";
import "../css/PostComments.css";

export const PostComments = () => {
    const { review_id } = useParams();
    const [newComment, setNewComment] = useState({
		username: '',
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
		postComments(newComment, review_id).then((res) => {
			console.log(res);
		});
		setNewComment({
			username: '',
			body: '',
		});
		navigate('/');
	};

	return (
		<div>
			<form className='postComments-form' onSubmit={handleSubmit}>
				<h3 className='post-comment-title'>Add your Comment!</h3>
				<label className='user-label'>Username</label>
				<br />
				<div className='input-div'>
					<input
						className='username-input'
						onChange={handleChange}
						value={newComment.username}
						type='text'
						name='username'
                        required
					/>
					<br />
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
