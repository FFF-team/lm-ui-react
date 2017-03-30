/**
 * Created by khongyan on 2017/3/29.
 */
import React, {PropTypes} from 'react';

const TabTemplate = ({children, selected}) => {
    let templateStyle = {
        display: selected ? 'block' : 'none'
    };
    
    return (
        <div className="lm-ui-tab-content" style={ templateStyle }>
            { children }
        </div>
    )
};

TabTemplate.propTypes = {
    children: PropTypes.node,
    selected: PropTypes.bool,
};

export default TabTemplate