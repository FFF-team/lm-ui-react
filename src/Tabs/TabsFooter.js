import React from 'react';
import './TabsFooter.scss'
import TabsHOC from './TabsHOC'

class TabsFooter extends React.Component {
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
        
        let cn = 'lm-ui-footer-nav';
        
        return (
            <div className={ className }>
                <ul style={ style } className={ cn }>
                    { tabs }
                </ul>
                { content }
            </div>
        )
    }
}

TabsFooter.propTypes = {
    selectedIndex: React.PropTypes.number, // 当前选中的tab index
    onSelectedChange: React.PropTypes.func, // tab改变后调用
    name: React.PropTypes.any // 各个tab唯一name
};

TabsFooter.defaultProps = {
    selectedIndex: 0,
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