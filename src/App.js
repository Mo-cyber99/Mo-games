import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Nav } from "./components/Nav";
import { AllReviews } from "./components/Reviews";
import { Categories } from "./components/Categories";
import { SingleCategory } from "./components/SingleCategory";
import { SingleReview } from "./components/SingleReview";
import { Comments } from "./components/Comments";
import { Profile } from "./components/Profile";
import { PostComments } from "./components/PostComments";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviews" element={<AllReviews />} />
          <Route path="/reviews/:review_id" element={<SingleReview />} />
          <Route path="/categories" element={<Categories />} />
          <Route
            path="/reviews/categories/:slug"
            element={<SingleCategory />}
          />
          <Route path="/reviews/:review_id/comments" element={<Comments />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/reviews/:review_id/comments/reviews/:review_id/newcomments"
            element={<PostComments />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
