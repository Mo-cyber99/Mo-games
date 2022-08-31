import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext, LoggedInContext } from "../contexts/User";
import homeImg from '../img/Games-Logo-2.png'
import '../css/Nav.css'

export const Header = () => {
    const {isLoggedIn, setIsLoggedIn} = useContext(LoggedInContext);
    const {currUser, setCurrUser} = useContext(UserContext);

    const handleClick = () => {
        setCurrUser('guest');
        setIsLoggedIn(false);
    };
    return (
        <section className="header">
             <h4>User: {currUser}</h4>
            {isLoggedIn ? <button onClick={handleClick}>Log Out</button>: null}
            {!isLoggedIn ? <p><Link to={'/profile'}>Login Here</Link></p>: null}
             <span><Link to='/'><img src={homeImg} alt="Games" className="home-img" to='/'/></Link></span>
        </section>
    )
}