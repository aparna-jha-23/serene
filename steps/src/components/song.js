import "./song.css";
import shreya from "../assests/shreyaG.jpg"
import lata from "../assests/lataM.jpg"
import arijit from "../assests/arijitS.webp"

const Song = () => {
    return(
        <div className= "section">
            <div className="heading">
                <h1 align="centre">Song Recommendations</h1>
            </div>
            <div className = "reccos">
                <div className="box1">
                        <div className="container">
                             <a href="https://youtu.be/ShNHF02GRTs"><img id="Singer1" src={shreya} /></a>
                        </div>
                </div>
                <div className="box2">
                        <div className="container">
                            <a href="https://youtu.be/BpLyDTEw3Z4"><img id="singer2" src={lata} /></a>
                        </div>
                </div>
                <div className="box3">
                        <div className="container">
                            <a href="https://youtu.be/jHNNMj5bNQw"><img id="singer3" src={arijit} /></a>
                        </div>
                </div>
            </div>
        </div>
    )
};

export default Song;