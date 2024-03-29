
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from "./pages/homepage/index";
import About from "./pages/about/index";
import Blog from "./pages/blog/index";
import Pricing from "./pages/pricing/index";
import Schedule from "./pages/schedule/index";
import Classes from "./pages/classes/index";
import Contact from "./pages/contact/index";
import Gallery from './pages/gallery/index';
import Login from './pages/login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/about' element={<About />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/schedule' element={<Schedule />} />
          <Route path='/classes' element={<Classes />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
