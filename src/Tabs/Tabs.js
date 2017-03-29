import React from 'react';
import TabTemplate from './TabTemplate';
import './index.scss'

class Tabs extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            selectedIndex: this.props.selectedIndex
        }
    }
    
    componentDidMount() {
        let selectedIndex = this.props.selectedIndex;
        if (this.props.withClick) {
            let tabs = this.getTabs();
            for(let i = 0, len = tabs.length; i < len; i++) {
                if (i === selectedIndex) {
                    this.handleClickAction(i, tabs[i]);
                    return
                }
            }
        }
    }
    
    getTabs() {
        let tabs = [];
        // todo: 校验
        return this.props.children
    }
    
    handleClickAction(index, tab) {
        this.setState({
            selectedIndex: index
        });
        
        tab.props.onClick ? tab.props.onClick(tab.props) : this.props.clickAction(tab.props);
    }
    
    getSelected(tab, index) {
        return index === this.state.selectedIndex
    }
    
    // todo: 标签个数限制，文字限制。warn
    render() {
        
        const content = [];
        const tabs = this.getTabs().map((tab, index) => {
            content.push(
                React.createElement(
                    TabTemplate,
                    {
                        key: index,
                        selected: this.getSelected(tab, index)
                    },
                    tab.props.children
                ));
            return React.cloneElement(
                tab,
                {
                    index: index,
                    key: index,
                    selected: this.getSelected(tab, index),
                    onClickAction: this.handleClickAction.bind(this)
                }
            )
        });
        
        return (
            <div className="lm-ui-navbar-wrap">
                <ul className="lm-ui-navbar lm-ui-navbar-equal">
                    { tabs }
                </ul>
                <div className="lm-ui-tab-content">
                    { content }
                </div>
            </div>
        
        )
    }
}

Tabs.propTypes = {
    selectedIndex: React.PropTypes.number, // 当前选中的tab index
    withClick: React.PropTypes.bool, // 初始选中是是否执行当前标签上的onClick
    clickAction: React.PropTypes.func // 点击任意tab都会调用，如果某一tab上有onClick则不执行clickAction
};

Tabs.defaultProps = {
    selectedIndex: 0,
    withClick: false,
    clickAction: () => {}
};

export default Tabs