import React, { Component, PropTypes, cloneElement } from 'react';
import classnames from 'classnames';
import TabNav from './TabNav';
import TabContent from './TabContent';

class Tabs extends Component {
    static propTypes = {
        classPrefix: PropTypes.string, // class前缀
        className: PropTypes.string, // 在主节点上增加可选class
        defaultActiveIndex: PropTypes.number, // 默认激活索引，组件内更新
        activeIndex: PropTypes.number, // 默认激活索引，组件外更新
        onChange: PropTypes.func, // 切换时回到函数
        children: PropTypes.oneOfType([
         PropTypes.arrayOf PropTypes.node),
         PropTypes.node,
        ]),
    };
    static defaultProps = {
        classPrefix: 'tabs',
        onChange: () => {}
    };
    constructor(props){
        super(props);

        this.handleTabClick = this.handleTabClick.bind(this);

        const currProps = this.props;
        let activeIndex = 0;
        if('activeIndex' in currProps){
            activeIndex = currProps.activeIndex;
        }else if('defaultActiveIndex' in currProps){
            activeIndex = currProps.defaultActiveIndex;
        }
        this.state = {
            activeIndex,
            prevIndex: activeIndex
        };
    }
    componentWillReceiveProps (nextProps) {
        // 如果props传入activeIndex，则直接更新
        if('activeIndex' in nextProps){
            this.setState({
                activeIndex: nextProps.activeIndex
            });
        }
    }
    handleTabClick (activeIndex) {
        const prevIndex = this.props.activeIndex;
        // 如果当前activeIndex与传入的activeIndex不一致，并且props中存在defaultActiveIndex时，则更新
        if(this.props.activeIndex !== activeIndex && 'defaultActiveIndex' in this.props){
            this.setState({
                activeIndex,
                prevIndex
            });
            // 更新后执行回调函数，抛出当前索引和上一次索引
            this.props.onChange({activeIndex, prevIndex});
        }
    }
    renderTabNav () {
        const {classPrefix, children} = this.props;
        return (
            <TabNav
                key='tabBar'
                classPrefix = {classPrefix}
                onTabClick = {this.handleTabClick}
                panels = {children}
                activeIndex = {this.state.activeIndex}
            />
        );
    }
    renderTabContent () {
        const {classPrefix, children} = this.props;
        return (
            <TabContent
                key = 'tabcontent'
                classPrefix = {classPrefix}
                panels = {children}
                activeIndex = {this.state.activeIndex}
            />
        );
    }
    render () {
        const {classPrefix} = this.props;
        const classes = classnames(className, 'ui-tabs');
        return (
            <div className={classes}>
                {this.renderTabNav()}
                {this.renderTabContent()}
            </div>
        );
    }
}

export default Tabs;
