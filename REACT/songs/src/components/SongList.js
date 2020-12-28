import React from "react";
import { connect } from "react-redux";
import "../css/bootstrap.min.css";

class SongList extends React.Component {
    render () {
        return (
            this.props.songs.map((song) => {
                return (
                    <div>
                        <div className = "form-group">
                            {song.title}
                        <button className = "btn btn-primary float-right">
                            Select
                        </button>
                        </div>
                    </div>
                    );
                }
            )
        );
    }
};

const mapStateToProps = (state) => {
    return {songs: state.songReducer};
}

export default connect(mapStateToProps)(SongList);