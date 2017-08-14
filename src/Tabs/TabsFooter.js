import React from 'react';
import PropTypes from 'prop-types';
import './TabsFooter.scss'
import TabsHOC from './TabsHOC'

const TabsFooter = ({
                        tabs,
                        content,
                        onSelectedChange,
                        initSelectedIndex,
                        value,
                        children,
                        ...other
                    }) => {

    let cn = 'lm-ui-footer-nav';

    return (
        <div { ...other }>
            <ul className={ cn }>
                { tabs }
            </ul>
            { content }
        </div>
    )

};

TabsFooter.propTypes = {
    initSelectedIndex: PropTypes.number, // 当前选中的tab index
    onSelectedChange: PropTypes.func, // tab改变后调用
    value: PropTypes.string // 各个tab唯一name
};

TabsFooter.defaultProps = {
    initSelectedIndex: 0,
    onSelectedChange: () => {}
};


let addPropsToTab = () => {
    return {
        className: 'lm-ui-footer-nav-item'
    }
};

export default TabsHOC({
    addPropsToTab: addPropsToTab()
})(TabsFooter)