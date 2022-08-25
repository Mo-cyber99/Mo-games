import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Nav } from './components/Nav';
import { AllReviews } from './components/Reviews';
import { Categories } from './components/Categories';
import { SingleCategory } from './components/SingleCategory';
import { SingleReview } from './components/SingleReview';
import './App.css';

function App() {
  return (

    <BrowserRouter>
    <div className="App">
      <Nav />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/reviews' element={<AllReviews />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/reviews/categories/:slug' element={<SingleCategory />} />
        <Route path='/reviews/:review_id' element={<SingleReview />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
