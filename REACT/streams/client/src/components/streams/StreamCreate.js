import React from "react";
import { Field, reduxForm } from "redux-form";
import "../../css/bootstrap.min.css";

class StreamCreate extends React.Component {

    renderInput (formProps) {
        return (
            <div className = "form-group">
                <label style = {{fontWeight: "bold"}}>{formProps.label}</label>
                <input className="form-control" {...formProps.input} />
            </div>
        );
    }

    onSubmit (formValues) {
        console.log(formValues);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name = "title" component = {this.renderInput} label = "Insert Title"/>
                <Field name = "description" component = {this.renderInput} label = "Insert Description" />
                <button className = "btn btn-primary">Submit</button>
            </form>
        );
    };
}
export default reduxForm({
    form: "streamCreate"
})(StreamCreate);