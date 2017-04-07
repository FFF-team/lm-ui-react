/**
 * Created by khongyan on 2017/3/31.
 */
import React from 'react';
import classnames from 'classnames';


class ListItem extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        const {
            primaryText,
            onSelectAction,
            className,
            ...other
        } = this.props;
    
        const cn = classnames('lm-ui-n-list-item', className);
        
        return (
            <div { ...other } onClick={ onSelectAction } className={ cn }>
                { primaryText }
            </div>
        )
    }
}

ListItem.propTypes = {
    primaryText: React.PropTypes.string,
    onSelectAction: React.PropTypes.func,
    className: React.PropTypes.string,
    value: React.PropTypes.string
};

ListItem.defaultProps = {
    primaryText: 'list-item',
    onSelectAction: () => {},
    className: ''
};

export default ListItem