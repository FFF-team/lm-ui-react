/**
 * Created by khongyan on 2017/3/31.
 */
import React from 'react';
import classnames from 'classnames';

import './index.scss'

class NList extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        const {
            children,
            value,
            onSelectedChange,
            activeClassName,
            className,
            ...other } = this.props;
        
        const cn = classnames('lm-ui-cells', className)
        
        return (
            <div { ...other } className={ cn }>
                { children }
            </div>
        )
    }
}

NList.propTypes = {
    onSelectedChange: React.PropTypes.func,
    value: React.PropTypes.string
};

NList.defaultProps = {
    onSelectedChange: () => {}
};

export default NList