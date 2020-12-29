import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions/index";
import "../css/bootstrap.min.css";

class SongList extends React.Component {
    render () {
        return (
            this.props.songs.map((song) => {
                return (
                    <div key = {song.title}>
                        <div className = "form-group">
                            {song.title}
                        <button className = "btn btn-primary float-right"
                                onClick = {() => this.props.selectSong(song)}
                        >
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
    console.log(state)
    return {songs: state.songs};
}

export default connect(mapStateToProps, { selectSong: selectSong})(SongList);