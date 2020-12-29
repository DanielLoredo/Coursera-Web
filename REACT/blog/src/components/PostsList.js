import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/index";

class PostsList extends React.Component {
    componentDidMount () {
        this.props.fetchPosts();
    }

    render () {
        return (
            <div>
                PostsList
            </div>
        )     
    } 
};

export default connect(null, { fetchPosts: fetchPosts })(PostsList);