import React from "react";
import "../css/bootstrap.min.css";

class SearchBar extends React.Component {
    state = {term: ""};

    onInputChange = (event) => {
        this.setState({term: event.target.value});
    }
    
    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);
    }

    render () {
        return (
        <div className = "container" style = {{marginTop: "20px"}}>
            <form onSubmit={this.onFormSubmit}>
                <div className = "form-group">
                    <label>Search Video</label>
                    <input 
                    type = "Text" 
                    className = "form-control" 
                    value = {this.state.term}
                    onChange = {this.onInputChange}>
                    </input>
                </div>
            </form>
        </div>
        );
    }
}

export default SearchBar;