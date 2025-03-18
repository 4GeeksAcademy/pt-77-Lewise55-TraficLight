import React, {useState} from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

//create your first component
const StopLight = (props) => {
    const [selected, setSelected] = useState("redLight");
    const [hidden, setHidden] = useState(true);
    return (
        <div className="Post">
            <div className="lightGroup m-auto">
                <div className="redLight">
                    <div 
                        className={`red light mt-3 ${selected === "redLight" ? "glow1" : ""}`} 
                        onClick={() => setSelected("redLight")}>
                    </div>
                </div>
                <div className="yellowLight">
                    <div 
                        className={`yellow light mt-3 ${selected === "yellowLight" ? "glow2" : ""}`} 
                        onClick={() => setSelected("yellowLight")}>
                    </div>
                </div>
                <div className="greenLight">
                    <div 
                        className={`green light mt-3 ${selected === "greenLight" ? "glow3" : ""}`} 
                        onClick={() => setSelected("greenLight")}>
                    </div>
                </div>
                <button class="btn btn-warning mt-3" onClick={() => setSelected("hiddenLight")}></button>
                <div className="hiddenLight mt-3">
                    <div className={`${selected === "hiddenLight" ? "hidden light glow4 mt-3" + "crossWalk" : "" }`}>
                         <span className="crossWalk mt-5">
                            <i className="fas fa-walking fa-xl" ></i> 
                         </span>                  
                    </div>
                    
                    
                                   
                </div>               
            </div>
        </div>
    );
};

export default StopLight;