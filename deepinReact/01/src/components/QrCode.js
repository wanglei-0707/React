import React, { Component } from 'react';

class QrCode extends Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            isActive: false
        };
    }
    componentDidMount () {
        document.body.addEventListener('click', e => {
            if(e.target && e.target.matches('div.code')){
                return;
            }
            this.setState({
                isActive: false
            });
        });
    }
    componentWillUnmount () {
        document.body.removeEventLister('click');
    }
    handleClick (e) {
        e.preventDefault();
        this.setState({
            isActive: !this.state.isActive
        });
    }
    render () {
        //  style = 'width: 200px; height: 200px; background: red;';
        return (
            <div>
                <button onClick={this.handleClick}>二维码</button>
                <div className="code" style={{display: this.state.isActive ? 'block' : 'none', width: 200, height: 200, background: 'red'}} onClick={this.handleClickQr}></div>
            </div>
        );
    };
}

export default QrCode;
