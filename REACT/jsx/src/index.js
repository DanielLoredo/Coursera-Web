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
                <CommentDetail author="Daniel Loredo" dateAgo = "Hace unos segundos" foto = "img/daniel.jpg" />
                <CommentDetail author="Portilla" dateAgo = "Hace 2 horas" foto = "img/portilla.jpg"/>
            </div>
            <div class = "row">
                <CommentDetail author="El león Valencia" dateAgo = "Hoy a las 5:00pm" foto = "img/valencia.jpg"/>
                <CommentDetail author="Jorge Loredo" dateAgo = "Ayer" foto = "img/jorge.jpg"/>
            </div>
            <div class = "row">
                <CommentDetail author="Narhariiiiii" dateAgo = "Ultima conexión en 2010 :(" foto = "img/narhari.jpg" />
                <CommentDetail author="MOIK" dateAgo = "Ayer a las 2:00pm" foto = "img/moik.jpg"/>
            </div>
            <div class = "row">
                <CommentDetail author="Cesitar" dateAgo = "Inifinito" foto = "img/cesar.jpg"/>
                <CommentDetail author="Urcadiz" dateAgo = "Ayer" foto = "img/urcadiz.jpg"/>
            </div>
        </div>
            
        <script src = "js/bootstrap.min.js"></script>
        <script src = "js/jquery-3.5.1.min.js"></script>
    </div>
    );
}

ReactDOM.render(<App />, document.querySelector("#root"));