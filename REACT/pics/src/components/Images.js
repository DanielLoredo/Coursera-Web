import React from "react";
import "./imageStyle.css";

class Images extends React.Component {
    constructor (props) {
        super(props);

        this.imageRef = React.createRef();
        this.state = {spans: 0};
    }

    componentDidMount () {
        this.imageRef.current.addEventListener("load", this.setSpans)
    }

    setSpans = () => {
        const spans = Math.ceil(this.imageRef.current.clientHeight / 10);
        this.setState({ spans });
    }

    render() {
        return (
            <div style = {{gridRowEnd: `span ${this.state.spans}`}}>
                <img
                    ref = {this.imageRef}
                    alt = {this.props.onImages.description}
                    src = {this.props.onImages.urls.regular}
                />
            </div>
        ); 
    }
}

export default Images;