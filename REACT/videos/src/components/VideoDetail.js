import React from "react";

const VideoDetail = (props) => {
    if(!props.video){
        return< div>Loading...</div>;
    }
    const videoUrl = `https://www.youtube.com/embed/${props.video.id.videoId}`;

    return (
    <div className = "media">
        <div className = "media-body">
            <iframe style={{width: "100%", height: "360px"}} title = {props.video.snippet.title} src = {videoUrl}></iframe>
            <h4>{props.video.snippet.title}</h4>
            <p>{props.video.snippet.description}</p>
        </div>
    </div>
        );
}

export default VideoDetail;