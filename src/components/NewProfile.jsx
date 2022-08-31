import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUsers } from "../utils/API";
import { Button } from '@mui/material';
import "../css/Profile.css";

export const NewProfile = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    };

    const handleNameChange = (e) => {
        setName(e.target.value)
    };

    const handleUrlChange = (e) => {
        setUrl(e.target.value)
    };

    const handleSubmit = (e) => {
        setIsError(false)
        setIsLoading(true)
        e.preventDefault();
        createUsers(username, name, url).then(() => {
            setIsLoading(false);
            navigate('/profile')
        }).catch(() => {
            setIsError(true)
            setIsLoading(false)
        })
    }

    return (
        <section className="profile-link">
            <h2>Sign up for an account</h2>
            <form onSubmit={handleSubmit}>
                <section><label htmlFor="username">Username: </label>
                <input 
                className="username-in"
                onChange={handleUsernameChange}
                type='text'
                name="username"
                /></section><br />
                <section><label htmlFor="name">Name: </label>
                <input
                className="name-input"
                onChange={handleNameChange}
                type='text'
                name="name"
                 /></section><br />
                <section><label htmlFor="avatar_url">Avatar URL: </label>
                <input
                className="avatar-input"
                onChange={handleUrlChange}
                type='text'
                name="avatar"
                 /></section><br />
                <Button variant='contained' type='submit'>
					Submit
				</Button>
            </form>
            {isError ? <p>Sorry there has been a problem, please try again</p>: null}
            {isLoading ? <p>Creating...</p>: null}
        </section>
    )
}