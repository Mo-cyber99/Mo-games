import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoggedInContext, UserContext } from "./contexts/User";
import { useState } from "react";
import { Home } from "./components/Home";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { AllReviews } from "./components/Reviews";
import { Categories } from "./components/Categories";
import { SingleCategory } from "./components/SingleCategory";
import { SingleReview } from "./components/SingleReview";
import { Comments } from "./components/Comments";
import { Profile } from "./components/Profile";
import { NewProfile } from "./components/NewProfile";
import { PostComments } from "./components/PostComments";
import { ErrorPage } from "./components/ErrorPage";
import "./App.css";

function App() {
  const [currUser, setCurrUser] = useState('guest');
  const [isLoggedIn, setIsLoggedIn] = ([]);
  const [categories, setCategories] = useState([]);

  return (
    <UserContext.Provider value={{currUser, setCurrUser}}>
    <LoggedInContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav categories={categories} setCategories={setCategories}/>

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
          <Route path="/new-profile" element={<NewProfile />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/reviews/:review_id/comments/reviews/:review_id/newcomments"
            element={<PostComments />}
          />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
    </LoggedInContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
