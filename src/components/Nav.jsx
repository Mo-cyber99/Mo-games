import { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchCategories } from "../utils/API";
// import homeImg from '../img/Games-Logo-2.png'
import '../css/Nav.css'

export const Nav =({categories, setCategories}) => {

    useEffect(() => {
        fetchCategories().then((categories) => {
          setCategories(categories);
        });
      }, [setCategories]);
    
      return (
        <>
          <section className="nav-bar">
            {categories.map((category) => {
                <span>Filter item by:</span>;
                return (
                    <span key={category.slug}>
                  <Link to={`/reviews/categories/${category.slug}`} className='category'>{category.slug}</Link>
                </span>
              );
            })}
            </section>
<span className="prof">
            <Link to='/profile'>Users</Link>
        </span>

        </>
      );
}