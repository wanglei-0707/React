import React, { Component } from 'react';

class UncontrolledComponent extends Component {
    constructor (props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            value: 'hello world',
            name: 'wl',
            age: 24
        };
    }
    handleSubmit (e) {
        e.preventDefault();
        const { value } = this.refs.name;
        console.log(value);
    }
    handleChange (name, e) {
        this.setState({
            [name]: e.target.value
        });
    }
    render () {
        const { name, age } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <input value={name} onChange={this.handleChange.bind(this, 'name')} />{name}
                <input value={age} onChange={this.handleChange.bind(this, 'age')} />{age}
                <input ref="name" type="text" defaultValue="hello" />
                <input value={this.state.value} onChange={e=>{this.setState({value: e.target.value.toUpperCase()})}} />
                <input default={this.state.value} onChange={e=>{this.setState({value: e.target.value.toUpperCase()})}} />
                <button type="submit">save</button>
            </form>
        );
    }
}

export default UncontrolledComponent;
