import React from 'react'

class Tab extends React.Component {
    
    constructor(props){
        super(props)
    }
    
    handleClick(event) {
        event.stopPropagation();
        this.props.onClickAction && this.props.onClickAction(this.props.index, this)
    }
    
    render() {
        return (
            <li className={ this.props.selected === true ? 'active' : '' }  onClick={ this.handleClick.bind(this) }>
                <a>{ this.props.label }</a>
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