// import './App.css';
// import Home from "./home"
// import './components/navBar/navbar'
// import Contact from "./components/contact/contact"

import React, {Component} from "react";
import Navbar from './Navbar';
import Podcast from './podcasts';
import Song from "./song";
import Suggestion from "./suggestions";
import { useNavigate } from "react-router-dom";


const Anxiety =() => {
    const navigate=useNavigate()
    return (
            <div className="Anxiety">
                {/* <button className="btn" onClick={ () => {navigate(-1)}}>Home</button> */}
                <Navbar />
                <Suggestion />
                <Song />
                <Podcast />
            </div>
        );
}
  

export default Anxiety;