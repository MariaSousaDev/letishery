import logo from './logo.svg';
import './App.css';
import About from "./views/About";
import Works from "./views/Works";
import Contact from "./views/Contact";
import Conventions from "./views/Conventions";
import Layout from "./views/Layout";

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'


function App() {
  return (
    <Router >
      <Routes>
        <Route element={<Layout />} >
          <Route path="/" element={<About />} />
          <Route path="/About" element={<About />} />
          <Route path="/Works" element={<Works />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Conventions" element={<Conventions />} />
        </Route>
      </Routes>
      
    </Router>
  );
}


export default App;
