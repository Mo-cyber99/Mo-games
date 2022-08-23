import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Nav } from './components/Nav';
import { AllReviews } from './components/Reviews';

import './App.css';

function App() {
  return (

    <BrowserRouter>
    <div className="App">
      <Nav />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/reviews' element={<AllReviews />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
