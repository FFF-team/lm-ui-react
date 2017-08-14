import React from 'react';
import PropTypes from 'prop-types';

class EnhancedToggle extends React.Component {
    constructor(props) {
        super(props)
    }
    
    state = {
        checked: this.props.initChecked
    };
    
    handleChange = (event) => {
        // if (this.props.toggle === false) {
        //     this.refs.checkbox.checked = this.props.initChecked;
        // }
    
        let checkStatus = this.refs.checkbox.checked;
        
        this.setState({
            checked: this.props.toggle === false ? this.props.initChecked : checkStatus
        })
        
        if (this.props.onParentShouldUpdate) {
            this.props.onParentShouldUpdate(checkStatus)
        }
    }
    
    
    render() {
        const {
            onParentShouldUpdate,
            style,
            initChecked,
            toggle,
            disabled,
            ...others
        } = this.props;
        
        return (
            <input
                ref="checkbox"
                type="checkbox"
                checked={ this.state.checked }
                { ...others }
                onChange={ this.handleChange }
                style={ style }
            />
        )
    }
    
}

EnhancedToggle.PropTypes = {
    style: PropTypes.object,
    onParentShouldUpdate: PropTypes.func,
    toggle: PropTypes.bool,
    disabled: PropTypes.bool,
    iniChecked: PropTypes.checked
};

EnhancedToggle.defaultProps = {
    style: {},
    toggle: true,
    onParentShouldUpdate: () => {},
    initChecked: false
};

export default EnhancedToggle