import React from "react";
import "../../src/css/bootstrap.min.css";

class SearchBar extends React.Component {
    state = {term: ""}

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    render () {
        return (
            <div className="container" style={{marginTop: "10px", padding: "5px 20px 5px 20px"}}>
                <form onSubmit = {this.onFormSubmit}>
                    <div className = "form-group">
                        <label htmlFor="exampleInputEmail1">SearchBar</label>
                        <input className = "form-control" 
                            type = "text" 
                            value = {this.state.term}
                            onChange = {(event) => {this.setState({term: event.target.value})}}>
                        </input>
                    </div>
                </form>
            </div>
        );
    }
}

export default  SearchBar;