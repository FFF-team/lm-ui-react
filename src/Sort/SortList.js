import React from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames'

import Icon from '../Icon'
import ModelHOC from '../ModelHOC'
import "./index.scss"

import FilterList from './FilterList'

const ModelList = ModelHOC(FilterList);

const isFunc = (d) => Object.prototype.toString.call(d) === "[object Function]";
const isArray = (d) => Object.prototype.toString.call(d) === "[object Array]";


class SortList extends React.Component {
    constructor(props, context) {
        super(props, context);


        this.state = {
            defaultItem: {value: '', label: '', displayLabel: ''},
            filterData: [],
            isLoading: false
        };

    }


    componentDidMount() {
        this.setState({
            defaultItem: this.getDefaultFilterItem() || this.props.initActiveItem || this.state.defaultItem,
            filterData: this.props.filterItem
        });
    }



    getDefaultFilterItem() {
        const { filterItem } = this.props;

        if (isArray(filterItem)) {
            for(let i = 0, len = filterItem.length; i < len; i ++) {
                if (filterItem[i].isDefault) {
                    return filterItem[i]
                }
            }
        }

        return null
    }

    handleClick = (e) => {

        const { name, open, filterItem } = this.props;

        const lastOpen = open;

        const sortInfo = this.context.getSortInfo(name);


        this.context.updateSortOpen(name, !lastOpen)

        if (lastOpen === false) {
            if (isFunc(filterItem)) {

                const promise = filterItem();

                this.setState({
                    isLoading: true
                });

                promise.then && promise
                    .then((data) => {
                        this.setState({
                            isLoading: false,
                            filterData: data
                        });
                    });



            }
        }

        this.props.onClick && this.props.onClick({
            [name]: sortInfo,
            open: !lastOpen
        });

    };

    getSortByIcon() {
        const { open } = this.props;

        const iconsStyle = [
            {
                className: 'lm-ui-icon lm-icon-arrow-top',
                style: {
                    width: 0,
                    height: 0,
                },
            },
            {
                className: 'lm-ui-icon lm-icon-arrow-bottom',
                style: {
                    width: 0,
                    height: 0,
                },
            }
        ];

        const icon = iconsStyle[open ? 0 : 1];

        return <Icon style={icon.style} className={ icon.className } />
    }


    handleFilterChange = (ret) => {

        const { name } = this.props;

        if (ret) {
            this.setState({
                defaultItem: ret
            });
            // update sortInfo
            this.context.collectTabInfo(name, ret);
            // update sortOpen
            this.context.updateSortOpen && this.context.updateSortOpen(name, false)
        }
    }


    render() {

        const {
            className,
            // filterItem,
            open
        } = this.props;

        const { defaultItem, filterData, isLoading } = this.state;

        const sortWrapcn = classnames({
            'lm-ui-sort-wrap-active': open
        }, 'lm-ui-sort-wrap', className);

        const cnSort = classnames('lm-ui-sort', 'lm-ui-sort-list');

        return (
            <div className={ sortWrapcn }>
                <span className={ cnSort }  onClick={ this.handleClick }>
                    <em className="label">{ defaultItem.displayLabel || defaultItem.label }</em>
                    <span className='lm-ui-sort-icon'>
                        { this.getSortByIcon() }
                    </span>
                </span>

                <div style={{display: open ? 'block' : 'none'}}>
                    <ModelList data={filterData}
                               isLoading={isLoading}
                               defaultValue={ defaultItem.value }
                               onChange={ this.handleFilterChange }
                               showState={true}
                               className="demo-filter-bar-list"
                    />
                </div>




            </div>
        );
    }
}

SortList.PropTypes = {
    open: PropTypes.bool,
    initOpen: PropTypes.bool,
    filterItem: PropTypes.oneOfType([PropTypes.array, PropTypes.func]),
    name: PropTypes.string,
    onClick: PropTypes.func,
    initActiveItem: PropTypes.any
};

SortList.defaultProps = {
    open: null,
    initOpen: false,
    filterItem: [],
    initActiveItem: null,
    _type: 'sortList'
};

SortList.contextTypes = {
    updateSortOpen: PropTypes.func,
    collectTabInfo: PropTypes.func,
    getSortInfo: PropTypes.func
};

export default SortList
