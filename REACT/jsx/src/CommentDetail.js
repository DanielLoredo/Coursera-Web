import React from "react";
import "./css/bootstrap-grid.min.css";
import "./css/style.css";


const CommentDetail = props => {
    return (
                <div class = "col-12 col-sm-12 col-md-6 col-lg-6 normalComment">
                    <div class = "position-relative d-flex flex-row">
                        <div><img src = {props.foto} /></div>
                        <div class = "headerComment">
                            <div class = "nameComment">{props.author}<span class = "dateComment">{props.dateAgo}</span></div>
                            <div class = "descriptionComment">Hola yo soy Daniel muchisimo gusto ojala nos podamos llevar a toda madre</div>
                        </div>
                    </div>
                </div>
    );
}

export default CommentDetail;