import React from 'react';
// import ReactDOM from 'react-dom';

<<<<<<< HEAD
function sum(a, b) {
    return a + b
}
=======
import {sum} from "../common/common"
>>>>>>> master

export default class Car extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            color: "Blue",
            name: "Mustang",
            model: "Ford"
        };
    }

    changeColor = () => {
        this.setState({ color: "Orange" });
    }

    shouldComponentUpdate() {
        return true
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ color: "Purple" })
        }, 3000)
    }

    render() {
        return <div style={{color: this.state.color}}><h3> Hi{sum(2,3)}! I am a {this.state.color} colored {this.state.model} {this.state.name} Car!</h3>
            <button type="button" onClick={this.changeColor}>
                Change Color
            </button>
        </div>;
    }
}

<<<<<<< HEAD
module.exports = sum;
=======
>>>>>>> master
