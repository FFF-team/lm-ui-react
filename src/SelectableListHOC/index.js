import React from 'react'
import classnames from 'classnames'

const SelectableList = (
    config = {
        selectedStyle: {color: '#ff552e'},
        selectedClassName: ''
    }
) => (WrappedComponent) =>
    class extends React.PureComponent {
        constructor(props) {
            super(props);

            // value 受控组件
            // initValue 当initValue不为undefined时，hoc控制state
            this.state = {
                value: this.props.initValue === undefined ? this.props.value : this.props.initValue
            }
        }

        componentDidMount() {

        }

        componentWillReceiveProps(newProps) {
            if (newProps.value !== undefined && this.props.value !== newProps.value) {
                this.setState({
                    value: newProps.value
                })
            }
        }

        extendChildren(child, selectedStyle, selectedClassName) {
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
            return this.state.value === child.props.value;
        }

        handleClick = (event, item) => {
            let value = item.props.value;

            if (this.props.initValue !== undefined) {
                this.setState({
                    value: value
                })
            }

            // if (value !== this.state.value) {
            //     this.props.onSelectedChange && this.props.onSelectedChange(event, value, item)
            // }
            this.props.onSelectedChange && this.props.onSelectedChange(event, value, item)
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
                            return this.extendChildren(child, config.selectedStyle, config.selectedClassName)
                        })
                    }
                </WrappedComponent>
            )
        }
    };

export default SelectableList
