import React from 'react'
import classNames from 'classnames'

class Tab extends React.Component {
    
    constructor(props){
        super(props)
    }
    
    handleClick(event) {
        event.stopPropagation();
        this.props.onClickAction && this.props.onClickAction(this.props.index, this.props.value, this)
    }
    
    render() {
        const {
            selected,
            icon,
            label,
            className
        } = this.props;
        
        const cn = classNames({
            'active': selected === true,
        }, className);
        
        return (
            <li className={ cn }  onClick={ this.handleClick.bind(this) }>
                { React.isValidElement(icon) && icon }
                <p><a>{ label }</a></p>
            </li>
        )
    }
    
}

Tab.propTypes = {
    label: React.PropTypes.string
};

Tab.defaultProps = {
    label: 'tabName'
};

export default Tab