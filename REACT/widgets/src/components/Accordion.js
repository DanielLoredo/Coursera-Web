import React, {useState}from "react";
import "../css/bootstrap.min.css";

const Accordion = (props) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index);
    }    

    const renderedItems = props.items.map((item, index) => {
        const active = index === activeIndex ? "" : "collapse";

        return(
        <div className = "card">
            <div onClick = {() => onTitleClick(index)} className = "card-header">
                <i className = "dropdown-toggle"></i>
                <span style={{marginLeft: "10px", fontSize: "20px", fontWeight: "bold"}}>{item.title}</span>
            </div>
                <p className={active}>{item.content}</p>
        </div>
        );
    });
    
    return (
        <div>
            {renderedItems}
        </div>
    );
}

export default Accordion; 