import React from 'react'
import classnames from 'classnames'

const SelectedTableList = ({
    selectedStyle = {color: '#ff552e'},
    selectedClassName = ''
}) => (WrappedComponent) =>
    class extends React.Component {
        constructor(props) {
            super(props);
        }
    
        componentDidMount() {
            this.state = {
                selectedValue: this.props.value
            }
        }
    
        componentWillReceiveProps(newProps) {
        
        }
        
        extendChildren(child, selectedStyle) {
            let activeClassName = this.props.activeClassName;
            let mergedStyle = Object.assign({}, child.props.style);
            let mergedClassName = child.props.className;
            if (this.isChildSelected(child)) {
                mergedStyle = Object.assign({}, mergedStyle, selectedStyle);
                mergedClassName = activeClassName ? activeClassName : classnames(mergedClassName, selectedClassName)
            }
            
            return React.cloneElement(child, {
                onClick: (event) => {
                    child.props.onClick && child.props.onClick(event);
                    this.handleClick(event, child);
                },
                style: mergedStyle,
                className: mergedClassName
            })
            
        }
        
        isChildSelected(child, props) {
            return this.props.value === child.props.value;
        }
        
        handleClick = (event, item) => {
            let value = item.props.value;
            
            if (value !== this.props.value) {
                this.props.onSelectedChange && this.props.onSelectedChange(event, value, item)
            }
        };
        
        render() {
            const {
                children,
                ...other
            } = this.props;
            
            
            return (
                <WrappedComponent { ...other }>
                    {
                        React.Children.map(children, (child) => {
                            return this.extendChildren(child, selectedStyle)
                        })
                    }
                </WrappedComponent>
            )
        }
    };

export default SelectedTableList
    