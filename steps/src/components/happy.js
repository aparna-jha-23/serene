import React from "react";
import './happy.css';
import bg1 from "../assests/bgimage1.jpg";
import bg2 from "../assests/bgimg2.jpg";
import bg3 from "../assests/bgiamge3-removebg-preview.png";
import Navbar from "./Navbar";



const Happy =() => {
    return (
        <div className="main">
        < Navbar />
            <div className="part1">
                <img src={bg1} />
                <div className="box11">
                    <div className="textbox">

                    </div>

                </div>
            </div>
            <div className="part2">
                <img id="second" src={bg2} />
                <div className="box22">
                    <div className="textbox">

                    </div>

                </div>
            </div>
            <div className="part3">
                <img src={bg3} />
                <div className="box33">
                    <div className="textbox">
                        
                    </div>

                </div>
            </div>
      
        </div>
  )
    
};

export default Happy;
