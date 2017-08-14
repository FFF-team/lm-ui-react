import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import {MAX_TAB} from './config';
import TabsHOC from './TabsHOC'
import './Tabs.scss'

const Tabs = ({
                  tabs,
                  content,
                  onSelectedChange,
                  initSelectedIndex,
                  value,
                  children,
                  ...other
              }) => {


    const isMutiNav = tabs.length > MAX_TAB

    let cnBox = classnames({
        'lm-ui-navbar-multi': isMutiNav
    }, 'lm-ui-navbar-box');

    let cnTabs = classnames({
        'lm-ui-navbar-nowrap': isMutiNav,
        'lm-ui-navbar-equal': !isMutiNav
    }, 'lm-ui-navbar');

    return (
        <div {...other}>
            <div className={cnBox}>
                <ul className={cnTabs}>
                    {tabs}
                </ul>
            </div>
            {content}
        </div>
    )
}

Tabs.propTypes = {
    initSelectedIndex: PropTypes.number, // 当前选中的tab index
    onSelectedChange: PropTypes.func, // tab改变后调用
    value: PropTypes.string // 各个tab唯一name
};

Tabs.defaultProps = {
    initSelectedIndex: 0,
    onSelectedChange: () => {
    }
};

export default TabsHOC({
    addPropsToTab: {}
})(Tabs)