import React from 'react'

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
            height: 24,
            width: 24,
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

export default SvgIcon