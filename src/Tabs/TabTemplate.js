/**
 * Created by khongyan on 2017/3/29.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'

const TabTemplate = ({children, selected}) => {
    let cn = classnames({
        'hide': !selected
    }, 'lm-ui-navbar-content');
    
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