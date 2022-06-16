import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './/css/style.css';
import reportWebVitals from './reportWebVitals'
import Home from './components/Home'
import Inventory from './components/Inventory'
import About from './components/About'
import Contact from './components/Contact'
import Singlecar from './components/Singlecar'
import Thanks from './components/Thanks';
import Header from './components/Header';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="inventory" element={<Inventory />} />
    <Route path="inventory/:id" element={<Singlecar />} />
    <Route path="about" element={<About />} />
    <Route path="thanks" element={<Thanks />} />
    <Route path="contact" element={<Contact />} />
  </Routes>
  <Footer />
  </BrowserRouter>
);

reportWebVitals();
