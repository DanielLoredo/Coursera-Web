import React from "react";


const CommentDetail = props => {
    return (
    <div>
        <div class = "position-relative d-flex flex-row card-content">
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