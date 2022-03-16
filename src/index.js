import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './overriding.scss';
/* import App from './App'; */ 
import Navigation from './Navigation';
import Home from './Home';
import Rides from './Rides';
import Map from './Map';
import Login from './Login';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  authDomain: "carpooling-344106.firebaseapp.com",
  projectId: "carpooling-344106",
  storageBucket: "carpooling-344106.appspot.com",
  messagingSenderId: "662719491154",
  appId: "1:662719491154:web:525a47c5e570e08c95c38b",
  measurementId: "G-V03NLLDSQ1"
};


ReactDOM.render(
  <React.StrictMode>
<Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rides" element= {<Rides />} />
      <Route path="/map" element= {<Map />} />
      <Route path="/signin" element= {<Login />} />
    </Routes>
  </Router>,
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
