import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Router from "./components/Router";
import Header from "./components/Header";

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

    const options = [
        {
            label: "This is color red",
            value: "red"
        },
        {
            label: "This is color green",
            value: "green"
        },
        {
            label: "This is color blue",
            value: "blue"
        }
    ];

    const [selected, setSelected] = useState(options[0]);
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
        <Header />
        <Router  path = "/">
            <Accordion className = "accordion" items = {items} />
        </Router>
        <Router path = "/translate">
            <Translate />
        </Router>
        <Router path = "/list">
            <Search />
        </Router>
        <Router path = "/dropdown"> 
            <Dropdown  
                label = "Select a color"
                options = {options}
                selected = {selected}
                onSelectedChange = {setSelected}
            />
        </Router>
    </div>
    );
}

export default App;