import React from "react";
import Images from "./Images";
import "./imageStyle.css";

const ImagesList = (props) => {
    
    const images = props.images.map((image) => {
        return <Images key={image.id} onImages={image} />;
    });

    return <div className="image-list">{images}</div>;
}

export default ImagesList;