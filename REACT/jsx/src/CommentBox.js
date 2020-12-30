import React from "react";

const CommentBox = props => {
    return (
    <div>
        
        <div class="card text-center col-12 col-sm-12 col-md-6 col-lg-6 commentBox normalComment">
            <div class="card-body">
                <p class="card-text">
                    {props.children}
                </p>
            </div>
            <div class="card-footer">
                <div class = "row downButtons">
                    <div class = "col acceptButton">
                        Aceptar
                    </div>
                    <div class = "col denyButton">
                        Rechazar
                    </div>
                </div>
            </div>
        
        </div>
    </div>
    );
}

export default CommentBox;