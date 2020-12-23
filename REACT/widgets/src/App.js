import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const App = () => {
    const items = [
        {
            title: "What is React?",
            content: "React is a front end javascript framework"
        },
        {
            title: "Why use React?",
            content: "React is a favorite JS library among engineers"
        },
        {
            title: "How do you use React?",
            content: "You use React by creating components"
        }
    ];

    //const options = [
    //    {
    //        label: "This is color red",
    //        value: "red"
    //    },
    //    {
    //        label: "This is color green",
    //        value: "green"
    //    },
    //    {
    //        label: "This is color blue",
    //        value: "blue"
    //    }
    //];

    //  [selected, setSelected] = useState(options[0])const;
    // const [showDropdown, setShowDropdown] = useState(true);
    // <Accordion className = "accordion" items = {items} />
    //<Search />
    // <button onClick = {() => setShowDropdown(!showDropdown)}>Dropdown Toggle</button>
        // { showDropdown ? 
        //  <Dropdown 
        //    selected = {selected} 
        //    onSelectedChange = {setSelected} 
        //    options = {options} />
        //    : null
        //}

    return (
    <div className = "container">
        <Translate />
    </div>
    );
}

export default App;