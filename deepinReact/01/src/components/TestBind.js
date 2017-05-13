import React, { Component } from 'react';

class Button extends Component {
    handleClick (e) {
        console.log(e.target);
        this.handleClick = this.handleClick.bind(this);
    }
    render () {
        return <button onClick={this.handleClick}>test</button>
    }
}

export default Button;
