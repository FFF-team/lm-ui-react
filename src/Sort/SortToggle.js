import React from 'react'
import classnames from 'classnames'

import Icon from '../Icon'
import EnhancedToggle from './EnhancedToggle'
import "./index.scss"

// todo: 单向 双向

class SortToggle extends React.Component {
    constructor(props) {
        super(props);
        
        this.toggleStyle = {
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            zIndex: 1
        }
        
        this.state = {
            sortBy: ''
        }
    }
    
    componentWillReceiveProps(nextProps) {
        /*this.setState({
         sortBy: nextProps.sortBy
         })*/
    }
    
    
    toggleStatus = (status) => {
        let sortBy = status === true ? 0 : 1;
        
        this.setState({
            sortBy: sortBy
        });
        
        let sortKey = this.props.sortKey[sortBy];
        
        this.props.clickAction && this.props.clickAction(sortKey, sortBy)
    }
    
    render() {
        
        const {
            label,
            clickAction,
            sortKey
        } = this.props;
        
        const cn = classnames({
            'positive-sort': this.state.sortBy === 0,
            'reverse-sort': this.state.sortBy === 1
        });
        
        return (
            <span className="lm-ui-sort">
                <em className="label">{ label }</em>
                <span className={ cn }>
                    <Icon className="lm-ui-icon lm-icon-arrow-top"/>
                    <Icon className="lm-ui-icon lm-icon-arrow-bottom"/>
                </span>
                <EnhancedToggle style={ this.toggleStyle }
                                onParentShouldUpdate={ this.toggleStatus }
                />
            </span>
        );
    }
}

SortToggle.PropTypes = {
    // sortBy: React.PropTypes.string // 0: 升序， 1： 降序
};

SortToggle.defaultProps = {
    label: '筛选',
    clickAction: () => {
    },
    sortKey: []
};

export default SortToggle