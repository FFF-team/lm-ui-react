import React from 'react';
import TabTemplate from './TabTemplate';


const TabsHOC = ({
    addPropsToTab
}) =>
    (WrappedComponent) =>
        class extends React.Component {
            constructor(props) {
                super(props);
                
                const valueLink = this.getValueLink(this.props);
                const initialIndex = this.props.selectedIndex;
                
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
                
                this.getTabs().forEach((tab, index) => {
                    if (valueLink.value === tab.props.value) {
                        selectedIndex = index;
                    }
                });
                
                return selectedIndex;
            }
            
            getValueLink(props) {
                return {
                    value: props.value,
                    handleChange: props.changeAction || function () {
                    }
                }
            }
            
            getTabs() {
                let tabs = [];
                // todo: 校验
                return this.props.children ? this.props.children : []
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
                
                tab.props.onClick && tab.props.onClick(tab);
            }
            
            getSelected(tab, index) {
                return index === this.state.selectedIndex
            }
            
            // todo: 标签个数限制，文字限制。warn
            render() {
                const {style, className} = this.props;
                
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
                            onClickAction: this.handleClickAction.bind(this),
                            ...addPropsToTab
                        }
                    )
                });
                return (
                    <WrappedComponent tabs={ tabs }
                                      content={ content }
                                      style={ style }
                                      className={ className }/>
                )
            }
        };

export default TabsHOC