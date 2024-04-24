import './App.css';
import About from "./views/About";
import Works from "./views/Works";
import Contact from "./views/Contact";
import Events from "./views/Events";
import Layout from "./views/Layout";

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Index from './views/Index';
import Goods from './views/Goods';


function App() {
  return (
    <Router >
      <Routes>
        <Route element={<Layout />} >
          <Route path="/" element={<Index />} />
          <Route path="/About" element={<About />} />
          <Route path="/Works" element={<Works />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Goods" element={<Goods />} />
        </Route>
      </Routes>
      
    </Router>
  );
}


export default App;
