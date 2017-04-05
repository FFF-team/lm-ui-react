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
        };
        
        this.state = {
            sortBy: '',
            sortKey: this.getSortKey(this.props.sortInfo)
        };
        
        this.canToggle = false
    }
    
    componentDidMount() {
        this.canToggle = this.props.sortInfo.length === 2
    }
    
    componentWillReceiveProps(nextProps) {
        let nextSortKey = this.getSortKey(nextProps.sortInfo);
        let sortKey = this.getSortKey(this.props.sortInfo);
        if (nextSortKey == sortKey) { // todo: 对象相等情况，目前仅限于字符串
            return
        }
        // console.log(nextProps);
        this.setState({
            sortKey: this.getSortKey(nextProps.sortInfo)
        })
    }
    
    getSortKey(sortInfo) {
        return sortInfo[0].key !== undefined ? sortInfo[0].key : sortInfo[0]
    }
    
    getSortBy(sortInfo) {
        return sortInfo[0]['sortBy'] !== undefined ? sortInfo[0]['sortBy'] : '';
    }
    
    
    toggleStatus = (status) => {
        let sortInfo = this.props.sortInfo;
        let sortKey;
        let sortBy;
        
        if (sortInfo.length === 2) { // todo:双向切换
            sortBy = status === true ? 0 : 1;
            sortKey = sortInfo[sortBy];
    
            this.setState({
                sortBy: sortBy
            });
        } else { // todo:单项切换
            sortBy = this.getSortBy(this.props.sortInfo);
            sortKey = this.getSortKey(sortInfo);
            
            this.setState({
                sortBy: sortBy
            });
        }
        this.props.clickAction && this.props.clickAction(sortKey, sortBy)
        
        // this.props.onSelectAction && this.props.onSelectAction();
        
    }
    
    getSortByIcon() {
        let sortInfo = this.props.sortInfo;
        let icons = [
            <Icon className="lm-ui-icon lm-icon-arrow-top" key='0'/>,
            <Icon className="lm-ui-icon lm-icon-arrow-bottom" key='1'/>
        ];
    
        if (sortInfo.length === 2) { // todo: 双向切换
            return icons
        } else { // todo: 单项切换
            let sort = this.getSortBy(sortInfo);
            return sort !== '' ? icons[sort] : null;
        }
        
    }
    
    render() {
        
        const {
            label,
            clickAction,
            onSelectAction,
            sortInfo,
            ...other
        } = this.props;
        
        const cn = classnames({
            'positive-sort': this.state.sortBy === 0,
            'reverse-sort': this.state.sortBy === 1
        }, 'lm-ui-sort-icon');
        
        return (
            <span className="lm-ui-sort" { ...other } onClick={ onSelectAction }>
                <em className="label">{ label }</em>
                <span className={ cn }>
                    { this.getSortByIcon() }
                </span>
                <EnhancedToggle style={ this.toggleStyle }
                                toggle={ this.canToggle }
                                onParentShouldUpdate={ this.toggleStatus }
                />
            </span>
        );
    }
}

Sort.PropTypes = {
    value: React.PropTypes.number,
    label: React.PropTypes.string,
    sortInfo: React.PropTypes.array, // 0: 升序， 1： 降序
    clickAction: React.PropTypes.func
};

Sort.defaultProps = {
    value: React.PropTypes.number,
    label: '筛选',
    clickAction: () => {},
    sortInfo: []
};

export default Sort