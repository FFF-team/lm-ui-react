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
    selectedIndex: React.PropTypes.number, // 当前选中的tab index
    changeAction: React.PropTypes.func, // tab改变后调用
    name: React.PropTypes.any // 各个tab唯一name
};

Tabs.defaultProps = {
    selectedIndex: 0,
    changeAction: () => {}
};

export default TabsHOC({
    addPropsToTab: {}
})(Tabs)