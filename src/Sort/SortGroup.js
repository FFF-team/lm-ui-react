import React from 'react'
import PropTypes from 'prop-types';
import SelectableListHOC from '../SelectableListHOC'
import classnames from 'classnames';


const Wrapper = ({
                  value, // SelectableListHOC
                  onSelectedChange, // SelectableListHOC
                  initValue, // SelectableListHOC

                  children,
                  className,
                  ...other
              }) => {

    const cn = classnames('lm-ui-sort-group', className)

    return (
        <div { ...other } className={ cn }>
            { children }
        </div>
    )
};

Wrapper.propTypes = {
    onSelectedChange: PropTypes.func,
    value: PropTypes.string
};

Wrapper.defaultProps = {
    onSelectedChange: () => {}
};

const SelectableWrapper = SelectableListHOC({
    selectedClassName: 'lm-ui-sort-active'
})(Wrapper);



class SortGroup extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: '',
            children: this.props.children.map((child, index) => {

                return React.cloneElement(child, {
                    open: false,
                    key: index,
                })


            })
        }
    }

    getChildContext() {
        return {
            updateSortOpen: (value, state) => {

                this.updateSortOpen(value, state)
            }

        };
    }

    componentDidMount() {
        this.setState({
            value: this.props.initValue !== undefined ? this.props.initValue : this.props.value
        })
    }

    componentWillReceiveProps(newProps) {
        if (newProps.value !== undefined && this.props.value !== newProps.value) {
            this.setState({
                value: newProps.value
            })
        }
    }



    handleSelectedChange = (sortInfo, value, item) => {

        this.setState({
            value: value,
        });

        this.openChild(value)

    };

    updateSortOpen(value, state) {

        const { children } = this.state;

        const newChildren = children.map((child, index) => {

            if (value === child.props.value) {
                return React.cloneElement(child, {
                    open: state,
                    key: index,
                })
            }

            return React.cloneElement(child, {
                open: child.props.open,
                key: index,
            })


        });

        this.setState({
            children: newChildren
        })
    }

    openChild(value) {
        const { children } = this.state;

        const newChildren = children.map((child, index) => {

            if (value === child.props.value) {
                const originOpen = child.props.open;

                return React.cloneElement(child, {
                    open: !originOpen,
                    key: index,
                })
            }

            return React.cloneElement(child, {
                open: false,
                key: index,
            })


        });

        this.setState({
            children: newChildren
        })
    }


    render() {

        const {
            // onSelectedChange, // SelectableListHOC

            // children,
            // initValue,  // 初始值，不受控
            // value, // 受控
            ...other
        } = this.props;

        const { value, children } = this.state;


        return (
            <SelectableWrapper value={ value }
                               onSelectedChange={ this.handleSelectedChange }
            >
                {
                    children
                }
            </SelectableWrapper>
        )

    }
}


SortGroup.PropTypes = {
    value: PropTypes.string,
    initValue: PropTypes.string
};

SortGroup.defaultProps = {
    value: '',
    initValue: ''
};

SortGroup.childContextTypes = {
    updateSortOpen: PropTypes.func
}


export default SortGroup
