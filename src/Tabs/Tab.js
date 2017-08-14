import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames'

class Tab extends React.Component {
    
    constructor(props){
        super(props)
    }
    
    handleClick(event) {
        event.stopPropagation();
        this.props.onClick && this.props.onClick(this.props.index, this.props.value, this)
    }
    
    render() {
        const {
            index,
            selected,
            onClick,
            onSelectAction,
            
            icon,
            label,
            value,
            className,
            children,
            ...other
        } = this.props;
        
        const cn = classNames({
            'active': selected === true,
            'active-svg-icon': icon && icon.type.lmuiName === 'SvgIcon' && selected === true
        }, className);
        
        
        return (
            <li className={ cn }
                onClick={ this.handleClick.bind(this) }
                { ...other }
            >
                { React.isValidElement(icon) && icon }
                <p><a>{ label }</a></p>
            </li>
        )
    }
    
}

Tab.propTypes = {
    label: PropTypes.string,
    icon: PropTypes.node,
    onSelectAction: () => {},
    value: PropTypes.string
};

Tab.defaultProps = {
    label: 'tabName',
};

export default Tab