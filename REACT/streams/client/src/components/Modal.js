import React from "react";
import ReactDOM from "react-dom";
import "../css/bootstrap.min.css";
import history from "../history";

const Modal = (props) => {
    return ReactDOM.createPortal(
        <div onClick = {props.onDismiss} style = {{zIndex: "10", height: "600px", weight: "100%", backgroundColor: "black"}}>
            <div onClick = {e => e.stopPropagation()} className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{props.title}</h5>
                    </div>
                    <div className="modal-body">
                        <p>{props.description}</p>
                    </div>
                    <div className="modal-footer">
                        {props.action}
                    </div>
                </div>
            </div>
        </div>,
        document.querySelector("#Modal")
    );
};

export default Modal;