/**
 * Created by khongyan on 2017/3/31.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './index.scss'

const List = ({
                  value, // SelectableListHOC
                  onSelectedChange, // SelectableListHOC

                  children,
                  className,
                  ...other
              }) => {

    const cn = classnames('lm-ui-list', className)

    return (
        <div { ...other } className={ cn }>
            { children }
        </div>
    )
}

List.propTypes = {
    onSelectedChange: PropTypes.func,
    value: PropTypes.string
};

List.defaultProps = {
    onSelectedChange: () => {}
};

export default List