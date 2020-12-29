import React from "react";
import SongList from "./SongList";
import SongDetail from "./SongDetail";

const App = () => {
    return (
    <div className = "container clearfix">
        <div className = "row">
            <div className = "col-6">
                <SongList />
            </div>
            <div className = "col-6">
                <SongDetail />
            </div>
        </div>
    </div>
    );
}

export default App;