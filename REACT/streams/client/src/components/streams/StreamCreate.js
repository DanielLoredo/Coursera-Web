import React from "react";
import { Field, reduxForm } from "redux-form";
import "../../css/bootstrap.min.css";
import { connect } from "react-redux";
import { createStreams } from "../../actions/index";

class StreamCreate extends React.Component {

    renderedError (meta) {
        if(meta.touched && meta.error) {
            return (
                <div>
                    {meta.error}
                </div>
            );
        }
    }

    renderInput = (formProps) => {
        return (
            <div className = "form-group">
                <label style = {{fontWeight: "bold"}}>{formProps.label}</label>
                <input autoComplete="off" className="form-control" {...formProps.input} />
                <div>{this.renderedError(formProps.meta)}</div>
            </div>
        );
    }

    onSubmit = (formValues) => {
        this.props.createStreams(formValues);
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

const validate = (formValues) => {
    const errors = {};
    if(!formValues.title) {
        errors.title = "You must enter a title";
    }
    if(!formValues.description) {
        errors.description = "You must enter a description";
    }
    return errors;
};

const formWrapped = reduxForm({
    form: "streamCreate",
    validate: validate
})(StreamCreate);

export default connect(null, { createStreams })(formWrapped);