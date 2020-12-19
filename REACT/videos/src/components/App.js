import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideosList from "./VideosList";
import VideoDetail from "./VideoDetail";
import "../css/bootstrap.min.css";

class App extends React.Component{
    state = { videos: [], selectedVideo: null }

    onTermSubmit = async (term) => {
        const response = await youtube.get("/search", {params: {q: term}});

        this.setState({videos: response.data.items,
                        selectedVideo: response.data.items[0]});

    }

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});
    }

    componentDidMount () {
        this.onTermSubmit("hello");
    }

    
    render () {
        return (
            <div className = "container">
                <SearchBar onFormSubmit = {this.onTermSubmit}/>
                <div className = "row">
                    <div className = "col-7">
                        <VideoDetail video = {this.state.selectedVideo}/>
                    </div>
                    <div className = "col-5">
                        <VideosList onVideoSelect={this.onVideoSelect} videos = {this.state.videos}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;