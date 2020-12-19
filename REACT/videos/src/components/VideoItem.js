import React from "react";
import "../css/styles.css"

const VideoItem = (props) => {
    return (
    <div onClick = {() => props.onVideoSelect(props.video)}>
        <li className = "listaItem list-group-item">
            <img alt = {props.video.snippet.title} src = {props.video.snippet.thumbnails.medium.url}/>
            {props.video.snippet.title}
        </li>
    </div>
    );
}

export default VideoItem;