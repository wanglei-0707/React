import React, { Component } from 'react';

const MyContainer = (WrappedComponent) =>
    class extends Component {
        constructor (props) {
            super(props);
            this.state = {
                name: ''
            };
            this.onNameChange = this.onNameChange.bind(this);
        }
        onNameChange (e) {
            this.setState({
                name: e.target.value
            });
        }
        render () {
            const newProps = {
                value: this.state.name,
                onChange: this.onNameChange
            };
            return <WrappedComponent {...this.props} {...newProps} />
        }
    }

@MyContainer
class MyComponent extends Component {
    render () {
        return <input name="name" {...this.props.name} />
    }
}

export default MyComponent;
