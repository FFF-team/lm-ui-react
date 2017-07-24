import React from 'react'
import './index.scss'



const NotifyLabel = (props) => {
    const { content, style } = props;
    
    const styles = Object.assign({},  style);
    
    return (
        <div className="lm-ui-notify-label" style={ styles }>
            { content }
        </div>
    )
}

export default NotifyLabel