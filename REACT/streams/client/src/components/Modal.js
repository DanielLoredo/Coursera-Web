import React from "react";
import ReactDOM from "react-dom";
import "../css/bootstrap.min.css";
import history from "../history";

const Modal = (props) => {
    return ReactDOM.createPortal(
        <div onClick = {() => history.push("/")} style = {{zIndex: "10", height: "600px", weight: "100%", backgroundColor: "black"}}>
            <div onClick = {e => e.stopPropagation()} className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Delete Stream</h5>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure you want to delete the stream?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Delete</button>
                        <button type="button" className="btn btn-primary">Close</button>
                    </div>
                </div>
            </div>
        </div>,
        document.querySelector("#Modal")
    );
};

export default Modal;