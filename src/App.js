import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPage from './components/Pages/LandingPage';
import Contact from './components/Pages/ContactPage';
import About from './components/Pages/AboutPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/" 
            element={<LandingPage/>}
            />
          <Route
            path="/contact"
            element={<Contact/>}
          />
          <Route
            path="/about"
            element={<About/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
