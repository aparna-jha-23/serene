import "./podcasts.css";
import swami from "../assests/swamimuk.jpg"
import mihal from "../assests/mihalyc.jpg"
import alan from "../assests/alanwatts.jpg"

const Podcast = () => {
    return(
        <div className= "section1">
            <div className="heading">
                <h1 align="centre" >Podcasts Recommendations</h1>
            </div>
            <div className = "reccos">
                <div className="box1">
                        <div className="container">
                            <a href="https://youtu.be/AC4ekgREju0" >
                            <img id="pod1" src={swami} />
                            </a>
                            
                        </div>
                </div>
                <div className="box2">
                        <div className="container">
                           <a href="https://youtu.be/TzPky5Xe1-s"> 
                            <img id="pod2" src={mihal} />
                            </a>
                        </div>
                </div>
                <div className="box3">
                        <div className="container">
                            <a href="https://youtu.be/Kdv4SuWS37A">
                            <img id="pod3" src={alan} />
                            </a>
                        </div>
                </div>
            </div>
        </div>
    )
};

export default Podcast;