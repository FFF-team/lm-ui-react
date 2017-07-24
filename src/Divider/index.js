import React from 'react'
import classnames from 'classnames'
import './index.scss'

const Divider = (props) => {
    const {
        inset,
        style,
        className,
        ...other
    } = props;
    
    // let getDpr = () => {
    //     let dpr = window.devicePixelRatio;
    //     let wh = window.screen.width;
    //     let diff = 1 / dpr;
    //
    //     return diff
    // };
    
    const baseStyles = {
        marginLeft: inset ? 14 : 0,
        marginRight: inset ? 14 : 0,
    };
    
    
    const cn = classnames('lm-ui-divider', className);
    
    return (
        <hr className={ cn } { ...other } style={ Object.assign(baseStyles, style) }/>
    )
};

export default Divider