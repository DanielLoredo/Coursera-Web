import React, { useState, useEffect, useRef } from "react";
import "../css/bootstrap.min.css";


const Dropdown = ({label, options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        document.body.addEventListener("click", (event) => {
            if(ref.current && ref.current.contains(event.target)){
                return;
            }
            
            setOpen(false);
        });
    }, []);

    const renderedOptions = options.map((option) => {
        if(option.value === selected.value) {
            return null;
        }

        return (
            <a key = {option.value} 
               className = {`dropdown-item ${open ? "d-block" : "d-none"}`} href = "#"
               onClick = {() => {onSelectedChange(option); setOpen(!open)}}
            >
                {option.label}
            </a>
        );
    });

    return (
        <div ref = {ref} className = "dropdown">
            <h4>{label}</h4>
            
            <button onClick= {() => {setOpen(!open)}} className="btn dropdown-toggle" type="button">
                {selected.label}
            </button>
            <div >
                {renderedOptions}
            </div>
        </div>
    );
}


export default Dropdown;