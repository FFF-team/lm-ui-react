/**
 * Created by khongyan on 2017/3/31.
 */
import React from 'react';
import classnames from 'classnames';

import './index.scss'

class List extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        const {
            value, // SelectableListHOC
            onSelectedChange, // SelectableListHOC
            
            children,
            className,
            ...other } = this.props;
        
        const cn = classnames('lm-ui-list', className)
        
        return (
            <div { ...other } className={ cn }>
                { children }
            </div>
        )
    }
}

List.propTypes = {
    onSelectedChange: React.PropTypes.func,
    value: React.PropTypes.string
};

List.defaultProps = {
    onSelectedChange: () => {}
};

export default List