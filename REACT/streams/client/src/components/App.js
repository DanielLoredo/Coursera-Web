import React from "react";
import { BrowseRouter, BrowserRouter, Route } from "react-router-dom";

const PageOne = () => {
    return <div>PageOne</div>;
};

const PageTwo = () => {
    return (
        <div>
            PageTwo
            <button >HELLO</button>
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