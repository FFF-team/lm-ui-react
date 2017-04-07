import React from 'react';
import TabTemplate from './TabTemplate';
import classnames from 'classnames';


const TabsHOC = ({
    addPropsToTab
}) =>
    (WrappedComponent) =>
        class extends React.Component {
            constructor(props) {
                super(props);
                
                const valueLink = this.getValueLink(this.props);
                const initialIndex = this.props.initSelectedIndex;
                
                this.state = {
                    selectedIndex: valueLink.value !== undefined ?
                        this.getSelectedIndex(this.props) :
                        initialIndex < this.getTabCount() ?
                            initialIndex :
                            0
                }
            }
            
            componentDidMount() {
                
            }
            
            componentWillReceiveProps(nextProps) {
                let valueLink = this.getValueLink(nextProps);
                
                if (valueLink.value !== undefined) {
                    this.setState({
                        selectedIndex: this.getSelectedIndex(nextProps)
                    })
                }
            }
            
            getSelectedIndex(props) {
                const valueLink = this.getValueLink(props);
                let selectedIndex = -1;
                
                this.getTabs(props).forEach((tab, index) => {
                    if (valueLink.value === tab.props.value) {
                        selectedIndex = index;
                    }
                });
                
                return selectedIndex;
            }
            
            getValueLink(props) {
                return {
                    value: props.value,
                    handleChange: props.onSelectedChange || function () {
                    }
                }
            }
            
            getTabs(props = this.props) {
                let tabs = [];
                // todo: 校验
                return props.children ? props.children : []
            }
            
            getTabCount() {
                return this.getTabs().length;
            }
            
            handleClickAction(index, value, tab) {
                const valueLink = this.getValueLink(this.props);
                
                if ((valueLink.value && valueLink.value !== value) ||
                    this.state.selectedIndex !== index) {
                    valueLink.handleChange(value, tab);
                }
                
                this.setState({
                    selectedIndex: index
                });
                
                tab.props.onSelectAction && tab.props.onSelectAction(tab);
            }
            
            getSelected(tab, index) {
                return index === this.state.selectedIndex
            }
            
            // todo: 标签个数限制，文字限制。warn
            render() {
                let { className, ...otherTabProps } = addPropsToTab;
                const content = [];
                const tabs = this.getTabs().map((tab, index) => {
                    content.push(
                        tab.props.children ?
                            React.createElement(
                                TabTemplate,
                                {
                                    key: index,
                                    selected: this.getSelected(tab, index)
                                },
                                tab.props.children
                            ) : undefined
                    );
                    return React.cloneElement(
                        tab,
                        {
                            index: index,
                            key: index,
                            selected: this.getSelected(tab, index),
                            onClick: this.handleClickAction.bind(this),
                            className: classnames(className, tab.props.className),
                            ...otherTabProps
                        }
                    )
                });
                return (
                    <WrappedComponent tabs={ tabs }
                                      content={ content }
                                      { ...this.props }/>
                )
            }
        };

export default TabsHOC