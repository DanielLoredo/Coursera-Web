import React from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../actions/index";
import UserHeader from "./UserHeader";

import "../css/bootstrap.min.css";
import "../css/style.css";


class PostsList extends React.Component {
    componentDidMount () {
        this.props.fetchPostsAndUsers();
    }
    
    renderList () {
        return (this.props.posts.map((post) => {

            return(
                <div key = {post.id} className="card">
                    <div className="card-body"> 
                        <p className="card-text">
                            <div className = "position-relative d-flex flex-row card-content">
                                    <div><img src = "persona.png"/></div>
                                    <div>
                                        <div style = {{fontWeight: "bold", fontSize: "30px"}}>{post.title}1</div>
                                        <div>{post.body}2</div>
                                        <UserHeader userId = {post.userId} />
                                    </div>
                            </div>
                        </p>
                    </div>
                </div>
            );
        }));
    }

    render () {
        return (
            <div>
                {this.renderList()}
            </div>
        )     
    } 
};

const mapToStateProps = (state) => {
    return ({posts: state.posts});
}

export default connect(mapToStateProps, { fetchPostsAndUsers: fetchPostsAndUsers })(PostsList);