import React from 'react';
import classnames from 'classnames';

import { MAX_TAB } from './config';
import TabsHOC from './TabsHOC'
import './Tabs.scss'

class Tabs extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const {
            tabs,
            content,
            style,
            className
        } = this.props;
        const isMutiNav = tabs.length > MAX_TAB
    
        let cnBox = classnames({
            'lm-ui-navbar-multi': isMutiNav
        },'lm-ui-navbar-box');
        
        let cnTabs = classnames({
            'lm-ui-navbar-nowrap': isMutiNav,
            'lm-ui-navbar-equal': !isMutiNav
        }, 'lm-ui-navbar');
    
        
        return (
            <div className={ className }>
                <div className={ cnBox }>
                    <ul style={ style } className={ cnTabs }>
                        { tabs }
                    </ul>
                </div>
                { content }
            </div>
        )
    }
}

Tabs.propTypes = {
    initSelectedIndex: React.PropTypes.number, // 当前选中的tab index
    onSelectedChange: React.PropTypes.func, // tab改变后调用
    value: React.PropTypes.any // 各个tab唯一name
};

Tabs.defaultProps = {
    initSelectedIndex: 0,
    onSelectedChange: () => {}
};

export default TabsHOC({
    addPropsToTab: {}
})(Tabs)