import React, { Component, PropTypes, cloneElement } from 'react';
import ReactDOM from 'react-dom';
import Button from './components/TestBind';
// import classnames from 'classnames';
// import style from './css/style.scss';
// import Tabs from './components/Tabs';
// import TabPane from './components/TabPane';

// class App extends Component {
//     constructor (props) {
//         super(props);
//         this.state = {
//             activeIndex: 0
//         };
//     }
//     render () {
//         return (
//             <Tabs defaultActiveIndex={this.state.activeIndex} className="tabs-bar">
//                 <TabPane order="0" tab={'Tab 1'}>第一个 Tab 里的内容</TabPane>
//                 <TabPane order="1" tab={'Tab 2'}>第二个 Tab 里的内容</TabPane>
//                 <TabPane order="2" tab={'Tab 3'}>第三个 Tab 里的内容</TabPane>
//             </Tabs>
//         );
//     }
// }

// class App extends Component {
//     constructor (props) {
//         super(props);
//         this.handleItemChange = this.handleItemChange.bind(this);
//     }
//     handleItemChange (entry) {
//         console.log(entry);
//     }
//     render () {
//         return (
//             <List
//                 list={[{text: 1, checked: false}, {text: 2, checked: false}]}
//                 handleItemChange={this.handleItemChange}
//             />
//         );
//     }
// }

ReactDOM.render(
    <Button />,
    document.getElementById('container')
);
