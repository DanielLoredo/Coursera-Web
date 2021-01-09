import React from "react";
import "../css/headerStyle.css";
import imgDaniel from '../img/daniel-icon.jpg';

class Header extends React.Component {
    render () {
        return (
            <header className = "header" >
                <div className = "logo-box">
                    <img src = {imgDaniel} className = "logo" alt = "logo" ></img>
                </div>
                <div className = "title-box">
                    <h1 className = "text-content">
                        <span className = "title-main-primary">Servicio TI</span>
                        <span className = "title-main-sub">Soporte Técnico del bueno</span>
                    </h1>

                    <a href = "#" className = "btn btn-white btn-animated">Llama Ya</a>
                </div>
            </header>
        );
    }
}

export default Header;