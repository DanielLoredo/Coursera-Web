import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const PageOne = () => {
    return (
        <div>
            PageOne
            <Link to = "/PageTwo">Link to PageTwo</Link>
        </div>
    );
};

const PageTwo = () => {
    return (
        <div>
            PageTwo
            <button >HELLO</button>
            <Link to = "/">Link to page one</Link>
        </div>);
};

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path = "/" exact component = {PageOne} />
                    <Route path = "/PageTwo" component = {PageTwo} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;