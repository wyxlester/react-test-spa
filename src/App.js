import React from 'react'
import Home from './Home'
import Stuff from './Stuff'
import Contact from './Contact'
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>Simple SPA</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/stuff">Stuff</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/stuff" element={<Stuff />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
