import React from 'react';

import './index.scss'

class Icon extends React.Component {
    static lmuiName = 'Icon';
    
    render() {
        const {
            style,
            children,
            className,
            ...other
        } = this.props;
    
        const mergedStyle = Object.assign({
            display: 'inline-block',
            color: '#333',
            height: 24,
            width: 24
        }, style);
        
        return (
            <i { ...other } className={ className ? ' lm-ui-icon ' + className : 'lm-ui-icon' }
                  style={ mergedStyle }>
                { children }
            </i>
        )
    }
}

Icon.PropTypes = {
    style: React.PropTypes.object
};

Icon.defaultTypes = {
};

export default Icon