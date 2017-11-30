import React from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames'

import "./index.scss"



class SortLabel extends React.Component {



    handleClick = (e) => {

        const { name, filterItem, open } = this.props;

        // update sortInfo
        this.context.collectTabInfo(name, open ? null : filterItem);

        // update sortOpen
        this.context.updateSortOpen && this.context.updateSortOpen(name, !open);


        const sortInfo = this.context.getSortInfo(name);

        this.props.onClick && this.props.onClick({
            [name]: sortInfo,
            open: !open
        });
    };


    render() {

        const {
            className,
            label,
        } = this.props;


        const sortWrapcn = classnames({
            // 'lm-ui-sort-wrap-active': this.state.open
        }, 'lm-ui-sort-wrap', className);

        const cnSort = classnames('lm-ui-sort', 'lm-ui-sort-list');

        return (
            <div className={ sortWrapcn } >
                <span className={ cnSort } onClick={ this.handleClick }>
                    <em className="label">{ label }</em>
                    <span className='lm-ui-sort-icon'>
                    </span>
                </span>

            </div>
        );
    }
}

SortLabel.PropTypes = {
    open: PropTypes.bool,
    initOpen: PropTypes.bool,
    filterItem: PropTypes.array,
    name: PropTypes.string,
    onClick: PropTypes.func,
    initActiveItem: PropTypes.any,
    label: PropTypes.string
};

SortLabel.defaultProps = {
    open: null,
    initOpen: false,
    filterItem: [],
    initActiveItem: null,
    _type: 'sortLabel',
    label: '筛选'
};

SortLabel.contextTypes = {
    updateSortOpen: PropTypes.func,
    collectTabInfo: PropTypes.func,
    getSortInfo: PropTypes.func
};

export default SortLabel
