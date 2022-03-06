import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './overriding.scss';
// import App from './App';
import Navigation from './Navigation';
import Home from './Home';
import Rides from './Rides';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
<Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rides" element={<Rides />} />
    </Routes>
  </Router>,
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
