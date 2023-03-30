import "./suggestions.css";
import bgimg1 from '../assests/meditation.jpg'

const Suggestion = () => {
    return(
        <div className="content">
            <div className="leftside">
                <img src={bgimg1} width="700px" ></img>
                
            </div>
            <div className = "rightside">
                <div className="text">
                    
                </div>
            </div>
        </div>
        )
};

export default Suggestion;