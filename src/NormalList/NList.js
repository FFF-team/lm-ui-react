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
            selectedValue,
            onSelectedChange,
            className,
            ...other } = this.props;
        
        const cn = classnames('lm-ui-n-list', className)
        
        return (
            <div { ...other } className={ cn }>
                { children }
            </div>
        )
    }
}

export default NList