import React from "react";
import "../css/bootstrap.min.css";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {

    componentDidMount () {
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({
                clientId: "534820186827-rpd5rke6m49a2elpn9sa2cmjm364gm9r.apps.googleusercontent.com",
                scope: "email"
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    };

    signIn = () => {
        this.auth.signIn();
    };

    signOut = () => {
        this.auth.signOut();
    };

    renderAuthButton () {
        if(this.props.isSignedIn === null){
            return null;
        } else if(this.props.isSignedIn){
            return (
                <div>
                    <button onClick = {this.signOut} type = "button" className = "btn btn-primary">
                        Sign out
                    </button>
                </div>
            );
        } else {
            return (
                <div>
                    <button onClick = {this.signIn} type = "button" className = "btn btn-primary">
                        Sign in
                    </button>
                </div>
            );
        }
    }

    render () {
        return <div>{this.renderAuthButton()}</div>;
    }
};

const mapStateToProps = (state) => {
    return {isSignedIn: state.auth.isSignedIn}
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);