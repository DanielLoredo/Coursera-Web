import React from "react";
import { fetchStreams } from "../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../../css/bootstrap.min.css";

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    renderList () {
        return this.props.streams.map((stream) => {
            return (
                <li key = {stream.description} className = "list-group-item">
                    <Link to = {`/streams/${stream.id}`} style = {{fontWeight: "bold", fontSize: "25px"}}>
                        {stream.title}
                    </Link>
                    <div>
                        {stream.description}
                    </div>
                    {this.renderAdmin(stream)}
                </li>
            );
        });
    }

    renderAdmin (stream) {
        if(this.props.currentUserId === stream.userId) {
            return (
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <Link to = {`/streams/edit/${stream.id}`} className="btn btn-primary">Edit</Link>
                    <Link to = {`/streams/delete/${stream.id}`} className="btn btn-danger" type="button">Delete</Link>
                </div>
            );
        }
    }

    renderCreate () {
        if(this.props.isSignedIn) {
            return (
                <Link to = "/streams/new" className = "btn btn-primary" >
                    Create Stream
                </Link>
            );
        }
    }

    render () {
        return (
            <div>
                <ul className = "list-group" style = {{marginTop: "20px"}}>
                    {this.renderList()}
                </ul>
                <div>
                    {this.renderCreate()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return { 
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
}

export default connect(mapStateToProps, {fetchStreams})(StreamList);