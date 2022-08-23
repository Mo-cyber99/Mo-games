import React from "react";
import { AllReviews } from "./Reviews";
import '../css/Home.css'

export const Home = () => {
    return (
        <div>
            <h1 className="home-title">Welcome to the island of Phenomenal Games</h1>
            <AllReviews />
        </div>
    )
}