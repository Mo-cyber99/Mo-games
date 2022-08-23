import { Link } from "react-router-dom";
import homeImg from '../img/Games-Logo-2.png'
import '../css/Nav.css'

export const Nav =() => {
    return (
    <nav className="nav-bar">
        <span><Link to='/'><img src={homeImg} alt="Games" className="home-img" /></Link></span>
        <span>
            <Link to='/categories'>Categories</Link>
        </span>
    </nav>
    )
}