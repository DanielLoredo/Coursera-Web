import React from "react";
import "./imageStyle.css";

class Images extends React.Component {
    render() {
        return (
            <div>
                <img
                    alt = {this.props.onImages.description}
                    src = {this.props.onImages.urls.regular}
                />
            </div>
        ); 
    }
}

export default Images;