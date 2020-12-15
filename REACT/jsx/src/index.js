import React from "react";
import ReactDOM from "react-dom";
import "./css/bootstrap-grid.min.css";
import "./css/style.css";
import CommentDetail from "./CommentDetail"


const App = () => {
    return (
    <div>
        <div class = "container">
            <div class = "row">
                <CommentDetail />
                <CommentDetail />
            </div>
            <div class = "row">
                <CommentDetail />
                <CommentDetail />
            </div>
            <div class = "row">
                <CommentDetail />
                <CommentDetail />
            </div>
            <div class = "row">
                <CommentDetail />
                <CommentDetail />
            </div>
        </div>
            
        <script src = "js/bootstrap.min.js"></script>
        <script src = "js/jquery-3.5.1.min.js"></script>
    </div>
    );
}

ReactDOM.render(<App />, document.querySelector("#root"));