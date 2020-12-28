import React from "react";
import SongList from "./SongList";

const App = () => {
    return (
    <div className = "container clearfix">
        <div className = "col-6">
            <SongList />
        </div>
    </div>
    );
}

export default App;