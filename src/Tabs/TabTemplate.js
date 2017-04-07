/**
 * Created by khongyan on 2017/3/29.
 */
import React, {PropTypes} from 'react';
import classnames from 'classnames'

const TabTemplate = ({children, selected}) => {
    let cn = classnames({
        'hide': !selected
    }, 'lm-ui-tab-content');
    
    return (
        <div className={ cn }>
            { children }
        </div>
    )
};

TabTemplate.propTypes = {
    children: PropTypes.node,
    selected: PropTypes.bool,
};

export default TabTemplate