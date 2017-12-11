import React from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames'

import Icon from '../Icon'
import EnhancedToggle from './EnhancedToggle'
import "./index.scss"






class SortToggle extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
            sortBy: this.getDefaultFilterItem().value, // 上下标示 0 上， 1下
            label: this.getDefaultFilterItem().label,
        };

    }

    toggleStyle = {
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        zIndex: 1
    };

    getDefaultFilterItem() {
        const { filterItem, initActiveItem } = this.props;

        for(let i = 0, len = filterItem.length; i < len; i ++) {
            if (initActiveItem && filterItem[i].value === initActiveItem.value) {
                return {
                    value: filterItem[i].value,
                    label: filterItem[i].label
                }
            }
        }

        return {
            value: '',
            label: filterItem[0].label
        }
    }


    toggleStatus = (status) => {

        const { filterItem, name } = this.props;

        let sortBy = status === true ? 0 : 1;
        let filterInfo = filterItem[sortBy];

        this.setState({
            sortBy: sortBy
        });

        this.context.updateSortOpen(name, true);
        // update sortInfo
        this.context.collectTabInfo(name, filterInfo)


        const sortInfo = this.context.getSortInfo(name);

        this.props.onClick && this.props.onClick({
            [name]: sortInfo,
            open: true
        });

    }

    getSortByIcon() {
        let currentSortBy = this.state.sortBy;

        // 双向切换
        let iconsStyle = [
            {
                className: classnames({'lm-icon-arrow-active': currentSortBy === 0},'lm-ui-icon lm-icon-arrow-top'),
                style: {
                    width: 0,
                    height: 0,
                },
            },
            {
                className: classnames({'lm-icon-arrow-active': currentSortBy === 1}, 'lm-ui-icon lm-icon-arrow-bottom'),
                style: {
                    width: 0,
                    height: 0,
                },
            }
        ]
        return iconsStyle.map((iconStyle, index) => (<Icon key={index} style={ iconStyle.style } className={ iconStyle.className }/>))

    }


    render() {

        const {
            className,
            open
        } = this.props;

        const { sortBy, label } = this.state;

        const cnIcon = classnames({
            'positive-sort': sortBy === 0,
            'reverse-sort': sortBy === 1,
        }, 'lm-ui-sort-icon');

        const sortWrapcn = classnames({
            'lm-ui-sort-wrap-active': open
        }, 'lm-ui-sort-wrap', className);

        const cnSort = classnames('lm-ui-sort', 'lm-ui-sort-toggle');

        return (
            <div className={ sortWrapcn }>
                <span className={ cnSort }>
                    <em className="label">{ label }</em>
                    <span className={ cnIcon }>
                        { this.getSortByIcon() }
                    </span>
                    <EnhancedToggle style={ this.toggleStyle }
                                    initChecked={ !sortBy }
                                    toggle={ true }
                                    onParentShouldUpdate={ this.toggleStatus }
                    />
                </span>
            </div>
        );
    }
}

SortToggle.PropTypes = {
    open: PropTypes.bool,
    initOpen: PropTypes.bool,
    filterItem: PropTypes.array,
    name: PropTypes.string,
    onClick: PropTypes.func,
    initActiveItem: PropTypes.any
};

SortToggle.defaultProps = {
    open: null,
    initOpen: false,
    filterItem: [],
    _type: 'sortToggle'
};

SortToggle.contextTypes = {
    updateSortOpen: PropTypes.func,
    collectTabInfo: PropTypes.func,
    getSortInfo: PropTypes.func
};

export default SortToggle
