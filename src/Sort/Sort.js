import React from 'react'
import classnames from 'classnames'

import Icon from '../Icon'
import EnhancedToggle from './EnhancedToggle'
import "./index.scss"

class Sort extends React.Component {
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
        let sortKey = this.props.sortKey[0];
        let sortBy = sortKey['sortBy'] !== undefined ? sortKey['sortBy'] : '';
        
        this.setState({
            sortBy: sortBy
        });
        
        
        
        this.props.clickAction && this.props.clickAction(sortKey, sortBy)
    }
    
    getSortByIcon() {
        let sort = this.props.sortKey[0].sortBy;
        
        switch (sort) {
            case 1:
                return (
                    <Icon className="lm-ui-icon lm-icon-arrow-bottom"/>
                );
            case 0:
                return (
                    <Icon className="lm-ui-icon lm-icon-arrow-top"/>
                )
            default:
                return null
        }
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
                    { this.getSortByIcon() }
                </span>
                <EnhancedToggle style={ this.toggleStyle }
                                toggle={ false }
                                onParentShouldUpdate={ this.toggleStatus }
                />
            </span>
        );
    }
}

Sort.PropTypes = {
    label: React.PropTypes.string,
    sortKey: React.PropTypes.array, // 0: 升序， 1： 降序
    clickAction: React.PropTypes.func
};

Sort.defaultProps = {
    label: '筛选',
    clickAction: () => {
    },
    sortKey: []
};

export default Sort