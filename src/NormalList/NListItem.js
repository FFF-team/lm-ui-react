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
            secondaryText,
            onSelectAction,
            className,
            ...other
        } = this.props;
    
        const cn = classnames('lm-ui-cell', className);
        
        return (
            <div { ...other } onClick={ onSelectAction } className={ cn }>
                <div className="lm-ui-cell-bd">
                    { primaryText }
                </div>
                <div className="lm-ui-cell-ft">
                    { secondaryText }
                </div>
            </div>
        )
    }
}

ListItem.propTypes = {
    primaryText: React.PropTypes.string,
    secondaryText: React.PropTypes.string,
    onSelectAction: React.PropTypes.func,
    className: React.PropTypes.string,
    value: React.PropTypes.string
};

ListItem.defaultProps = {
    primaryText: 'list-item',
    secondaryText: '',
    onSelectAction: () => {},
    className: ''
};

export default ListItem