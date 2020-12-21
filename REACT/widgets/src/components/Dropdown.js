import React from "react";
import "../css/bootstrap.min.css";

const Dropdown = (props) => {
    const renderedOptions = props.options.map((option) => {
        return (
            <a key = {option.value} className = "dropdown-item" href = "#">
                {option.label}
            </a>
        );
    });
    
    return (
        <div className = "dropdown-menu">
            {renderedOptions}
        </div>
    );
}

export default Dropdown;