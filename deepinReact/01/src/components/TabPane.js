import React, { Component, PropTypes, cloneElement } from 'react';
import classnames from 'classnames';

class TabPane extends Componet {
    static propTypes = {
        tab: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.node,
        ]).isRequired,
        order: PropTypes.string.isRequired,
        disabled: Proptypes.bool,
        isActive: PropTypes.bool,
    };
    constructor (props) {
        super(props);
    }
    render () {
        const { classPrefix, className, isActive, children } = this.props;
        const classes = classnames({
            [className]: className,
            [`${classPrefix}-panel`]: true,
            [`${classPrefix}-active`]: isActive,
        });
        return (
            <div
                role = "tabpanel"
                className = {classes}
                aria-hidden = {!isActive}
            >
                {children}
            </div>
        );
    }
}

export default TabPane;
