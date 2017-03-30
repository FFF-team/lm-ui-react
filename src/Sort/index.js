import React from 'react'

import Icon from '../Icon'

// todo: 单向 双向

class Sort extends React.Component {
    constructor(props) {
        super(props)
    }
    
    handleClick () {
        this.props.clickAction && this.props.clickAction()
    }
    
    
    render() {
        
        const {
            label,
            clickAction,
            ...other
        } = this.props;
        
        return (
            <span onClick={ this.handleClick.bind(this) } { ...other } >
                { label }
                <span>
                    <Icon className="lm-ui-icon lm-icon-arrow-bottom"/>
                    <Icon className="lm-ui-icon lm-icon-arrow-top"/>
                </span>
            </span>
        )
    }
}

export default Sort