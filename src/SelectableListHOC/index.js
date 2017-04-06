import React from 'react'

const SelectedTableList = ({
    selectedStyle = {color: 'red'}
}) => (WrappedComponent) =>
    class extends React.Component {
        constructor(props) {
            super(props);
            
            this.state = {
                selectedValue: this.props.value
            }
        }
        
        extendChildren(child, selectedStyle) {
            
            let mergedStyle = {}; // todo: merge style width old
            if (this.isChildSelected(child)) {
                mergedStyle = selectedStyle
            }
            
            return React.cloneElement(child, {
                onSelectAction: (event) => {
                    this.handleClick(event, child);
                    child.props.onSelectAction && child.props.onSelectAction(child)
                },
                style: mergedStyle
            })
            
        }
        
        isChildSelected(child, props) {
            return this.props.value === child.props.value;
        }
        
        handleClick = (event, item) => {
            let value = item.props.value;
            
            if (value !== this.props.value) {
                this.props.onSelectedChange && this.props.onSelectedChange(value, item)
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
    