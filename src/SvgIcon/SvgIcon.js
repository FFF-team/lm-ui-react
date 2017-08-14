import React from 'react'
import PropTypes from 'prop-types';

class SvgIcon extends React.Component {
    static lmuiName = 'SvgIcon';
    
    constructor(props) {
        super(props);
        
        this.state = {
            hovered: false
        }
    }
    
    render() {
        const {
            children,
            color,
            style,
            viewBox,
            ...other
        } = this.props;
        
        
        const mergedStyle = Object.assign({
            display: 'inline-block',
            color: '#333',
            fill: color,
            height: 20,
            width: 20,
            userSelect: 'none',
        }, style);
        
        return (
            <svg { ...other }
                 style={ mergedStyle }
                 viewBox={ viewBox }
            >
                { children }
            </svg>
        )
    }
}

SvgIcon.propTypes = {
    children: PropTypes.node,
    color: PropTypes.string,
    viewBox: PropTypes.string,
    style: PropTypes.object
};

export default SvgIcon