import React from "react";
import VideoItem from "./VideoItem";
import "../css/bootstrap.min.css";

const VideosList = (props) => {
    const videos = props.videos.map((video) => {
        return <VideoItem onVideoSelect={props.onVideoSelect} video = {video}/>
    })

    return (
    <ul className = "list-group">
        {videos}
    </ul>);
}

export default VideosList;