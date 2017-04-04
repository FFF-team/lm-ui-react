import React from 'react'

const SelectedTableList = ({
    selectedStyle = {color: 'red'}
}) => (WrappedComponent) =>
    class extends React.Component {
        constructor(props) {
            super(props);
            
            this.state = {
                selectedValue: this.props.selectedValue
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
                    // todo: 添加child自己的touch事件，目前只实现parent on change
                    // child.props.onClick && child.props.onClick(event, child)
                },
                style: mergedStyle
            })
            
        }
        
        isChildSelected(child, props) {
            return this.props.selectedValue === child.props.value;
        }
        
        handleClick = (event, item) => {
            let value = item.props.value;
            
            if (value !== this.props.selectedValue) {
                this.props.onSelectedChange && this.props.onSelectedChange(event, value)
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
    