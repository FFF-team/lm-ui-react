import React from 'react'
import PropTypes from 'prop-types';
import SelectableListHOC from '../SelectableListHOC'
import classnames from 'classnames';

class Wrapper extends React.Component {
    constructor(props) {
        super(props)
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {

        if (nextProps.value !== this.props.value) {
            return true
        }

        return false
    }


    render() {
        const {
            value, // SelectableListHOC
            onSelectedChange, // SelectableListHOC
            
            children,
            className,
            ...other
        } = this.props;

        const cn = classnames('lm-ui-sort-group', className);
        
        return (
            <div className={ cn } { ...other }>
                {
                    children
                }
            </div>
        )
    }
}

Wrapper.PropTypes = {
    value: PropTypes.string,
    onSelectedChange: PropTypes.func
};

Wrapper.defaultProps = {
    onSelectedChange: () => {}
};

const SelectableWrapper = SelectableListHOC({
    selectedClassName: 'lm-ui-sort-active'
})(Wrapper);



class SortGroup extends React.Component {

    componentWillMount() {
        this.state = {
            value: '',
            open: false
        }
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

    };


    render() {

        const {
            onSelectedChange, // SelectableListHOC

            children,
            initValue,  // 初始值，不受控
            value, // 受控
            ...other
        } = this.props;


        return (
            <SelectableWrapper value={ this.state.value }
                               onSelectedChange={ this.handleSelectedChange }
                               { ...other }
            >
                {
                    children.map((child, index) => {

                        return React.cloneElement(child, {
                            open: this.state.value === child.props.value,
                            key: index
                        })


                    })
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


export default SortGroup