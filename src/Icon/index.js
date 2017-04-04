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
        
        if (type === 'default') { // todo: 默认字体icon
            return (
                <i className={ other.className }/>
            )
        }
        
        if (type === 'svg') {
            // todo: svg icon
        }
        
        return (
            <i { ...other }
                  style={ style }>
                { children }
            </i>
        )
    }
}

Icon.PropTypes = {
    style: React.PropTypes.object,
    type: React.PropTypes.string
};

Icon.defaultTypes = {
    type: 'default'
};

export default Icon