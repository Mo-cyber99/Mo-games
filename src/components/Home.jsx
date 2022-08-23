import React from "react";
import { Link } from "react-router-dom";
import { AllReviews } from "./Reviews";

export const Home = () => {
    return (
        <div>
            <h1 className="home-title">Welcome to the island of Phenomenal Games</h1>
            <AllReviews />
        </div>
    )
}