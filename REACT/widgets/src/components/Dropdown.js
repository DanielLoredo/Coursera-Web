import React, { useState } from "react";
import "../css/bootstrap.min.css";

const Dropdown = (props) => {
    const [open, setOpen] = useState(false);

    const renderedOptions = props.options.map((option) => {

        if(option.value === props.selected.value) {
            return null;
        }

        return (
            <a key = {option.value} 
               className = {`dropdown-item ${open ? "d-block" : "d-none"}`} href = "#"
               onClick = {() => props.onSelectedChange(option)}
            >
                {option.label}
            </a>
        );
    });

    return (
        <div className = "dropdown">
            <h6>Select a color</h6>
            
            <button onClick= {() => {setOpen(!open)}} className="btn dropdown-toggle" type="button">
                {props.selected.label}
            </button>
            <div>
                {renderedOptions}
            </div>
        </div>
    );
}


export default Dropdown;