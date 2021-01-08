import React from "react";
import Modal from "../Modal";
import "../../css/bootstrap.min.css";
import history from "../../history";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";
import { Link } from "react-router-dom";

class StreamDelete extends React.Component {

    componentDidMount () {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderAction () {
        return (
            <React.Fragment>
                <button onClick = {() => this.props.deleteStream(this.props.match.params.id)} type="button" className="btn btn-danger" data-dismiss="modal">Delete</button>
                <Link to="/" type="button" className="btn btn-primary">Close</Link>
            </React.Fragment>
        );
    }

    renderContent () {
        if(!this.props.stream) {
            return " ";
        }

        return `Are you sure you want to delete the stream with title: ${this.props.stream.title}`;
    }
    
    render () {
        return (
            <div>
                <Modal 
                    title = "Delete Stream"
                    description = {this.renderContent()}
                    action = {this.renderAction()}
                    onDismiss = {() => history.push("/")}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id]};
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);