import React from "react";
import { fetchStreams } from "../../actions";
import { connect } from "react-redux";
import "../../css/bootstrap.min.css";

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    renderList () {
        return this.props.streams.map((stream) => {
            return (
                <li key = {stream.description} className = "list-group-item">
                    <div style = {{fontWeight: "bold", fontSize: "25px"}}>{stream.title}</div>
                    
                    {stream.description}
                </li>
            );
        });
    }

    render () {
        return (
            <ul className = "list-group" style = {{marginTop: "20px"}}>
                {this.renderList()}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return { streams: Object.values(state.streams) };
}

export default connect(mapStateToProps, {fetchStreams})(StreamList);