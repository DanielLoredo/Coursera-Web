import React from "react";
import ReactDOM from "react-dom";
import "./css/bootstrap-grid.min.css";
import "./css/style.css";
import CommentDetail from "./CommentDetail";
import CommentBox from "./CommentBox";


const App = () => {
    return (
    <div>
        <div class = "container">
        <CommentBox>
            <CommentDetail author="Daniel Loredo" dateAgo = "Hace unos segundos" foto = "img/daniel.jpg" />
        </CommentBox>
        <CommentBox>
            <CommentDetail author="Portilla" dateAgo = "Hace 2 horas" foto = "img/portilla.jpg"/>
        </CommentBox>
        <CommentBox>
            <CommentDetail author="El león Valencia" dateAgo = "Hoy a las 5:00pm" foto = "img/valencia.jpg"/>
        </CommentBox>
        <CommentBox>
            <CommentDetail author="Jorge Loredo" dateAgo = "Ayer" foto = "img/jorge.jpg"/>
        </CommentBox>
        <CommentBox>
            <CommentDetail author="Narhariiiiii" dateAgo = "Ultima conexión en 2010 :(" foto = "img/narhari.jpg" />
        </CommentBox>
        <CommentBox>
            <CommentDetail author="MOIK" dateAgo = "Ayer a las 2:00pm" foto = "img/moik.jpg"/>
        </CommentBox>
        <CommentBox>
            <CommentDetail author="Cesitar" dateAgo = "Inifinito" foto = "img/cesar.jpg"/>
        </CommentBox>
        <CommentBox>
            <CommentDetail author="Urcadiz" dateAgo = "Ayer" foto = "img/urcadiz.jpg"/>
        </CommentBox>
        <script src = "js/bootstrap.min.js"></script>
        <script src = "js/jquery-3.5.1.min.js"></script>
        </div>
    </div>
    );
}

ReactDOM.render(<App />, document.querySelector("#root"));