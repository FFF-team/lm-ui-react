import React from 'react';

import './index.scss'

class Icon extends React.Component {
    render() {
        const {
            type,
            style,
            children,
            ...other
        } = this.props;
        
        if (type === 'font') { // todo: 默认字体icon
            return (
                <i className="lm-ui-icon lm-icon-test"/>
            )
        }
        
        return (
            <span { ...other }
                  style={ style }>
                { children }
            </span>
        )
    }
}

Icon.PropTypes = {
    style: React.PropTypes.object,
    type: React.PropTypes.string
};

Icon.defaultTypes = {
    
};

export default Icon