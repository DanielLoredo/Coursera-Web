import React, { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import "../css/bootstrap.min.css";
import Convert from "./Convert";


const options = [
    {
        label: "Afrikaans",
        value: "af"
    },
    {
        label: "Arabic",
        value: "ar"
    },
    {
        label: "Hindi",
        value: "hi"
    }
];

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState("");

    return(
        <form>
            <div className = "form-group">
                <h4>Insert text</h4>
                <input 
                    style = {{marginBottom: "10px"}}
                    value = {text}
                    onChange = {e => setText(e.target.value)}
                />

                <Dropdown 
                    options = {options}
                    selected = {language}
                    onSelectedChange = {setLanguage}
                    label = {"Select a language"}
                />
                <h4 style = {{marginTop: "10px"}}>Output</h4>
                <Convert 
                    text = {text}
                    language = {language}
                />
            </div>
        </form>
    );
}

export default Translate;