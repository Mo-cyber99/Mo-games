import { useState, useEffect } from "react"
import { fetchCategories } from "../utils/API";
import { Link } from "react-router-dom";
export const Categories = (setSingleCategory) => {
    const [categories, setCategories] = useState([]);
  
    useEffect(() => {
        fetchCategories().then((categories) => {
            setCategories(categories)
        })
    }, []);

  

    
    return (
        <>
        <ul>
        {categories.map((category) => {
            <span>Filter item by:</span>
            return <li key={category.slug}>
               <Link
									to={"/reviews"}
									value={category.slug}
									onClick={() => {
										setSingleCategory(category.slug);
									}}
								>
									{category.slug}
								</Link>
            </li>
        })}
        </ul>
        </>
    )

        
 
}