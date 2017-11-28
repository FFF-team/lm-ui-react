import React from 'react'
import PropTypes from 'prop-types';

import {Sort, SortGroup, SvgIcon, ModelHOC } from 'src/index'
import FilterList from  './FilterList'
import MultiFilter from './MultiFilter'

const ModelList = ModelHOC(FilterList);

class FilterBar extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            multiFilterSelected: [], // 多选结果
        }
    }



    handleClick2 = ({key, sortBy}) => {
        // todo: do something on sort2
        this.props.onFilterChange(key, sortBy);


    }


    handleClick4 = ({key, sortBy}) => {
        this.props.onFilterChange(key, sortBy);

    }

    handleFilterListChange = (result) => {
        let {value, item } = result;

        this.props.onFilterChange(value, 0);


        return {
            label: item.props.primaryText,
        }

    };

    handleMultiFilterChange = (result) => {

        let value = result;

        this.props.onFilterChange(value, '');

        this.setState({
            multiFilterSelected: value,
        });

        return {
            label: '多条件'
        }

    };

    render() {
        return (
            <div>


                {/*<Sort value='1'
                      label={ '按时间' }
                      sortInfo={ [{key: 'byTime', sortBy: 1}] }
                      onClick={ this.handleClick1 }
                      initOpen={ false }
                >

                    <ModelList defaultValue={ 'byTime' }
                               showState={true}
                               className="demo-filter-bar-list"
                               onChange={ this.handleFilterListChange }/>

                </Sort>*/}


                <SortGroup className="demo-filter-bar"
                           initValue={ '1' }
                >
                    <Sort value='1'
                          label={ '按时间' }
                          sortInfo={ [{key: 'byTime', sortBy: 1}] }
                          initOpen={ false }
                    >

                        <ModelList defaultValue={ 'byTime' }
                                   showState={true}
                                   className="demo-filter-bar-list"
                                   onChange={ this.handleFilterListChange }/>

                    </Sort>


                    <Sort value='2'
                          label="按名称"
                          sortInfo={ [{key: '降序', sortBy: 1}, {key: '升序', sortBy: 0}]}
                          onClick={ this.handleClick2 }
                    />


                    <Sort value='3'
                          label="多条件"
                          sortInfo={ [{key: '', sortBy: ''}] }
                          icon={ true }
                          // open={ this.state.open3 }
                    >
                        <MultiFilter checkboxVal={ this.state.multiFilterSelected }
                                     onChange={ this.handleMultiFilterChange }
                        />
                    </Sort>

                    <Sort value="4"
                          label="序号排序"
                          sortInfo={ [{key: 'order'}] }
                          onClick={ this.handleClick4 }
                    />

                </SortGroup>


                {/*<Sort value='1'
                      label={ this.state.sort1Label }
                      sortInfo={ [{key: this.state.sort1, sortBy: 1}] }
                >

                    <ModelList defaultValue={ this.state.sort1 }
                               showState={true}
                               className="demo-filter-bar-list"
                               onChange={ this.handleFilterListChange }/>

                </Sort>*/}

            </div>
        )
    }
}

FilterBar.propTypes = {
    onFilterChange: PropTypes.func
};

FilterBar.defaultProps = {
    onFilterChange: () => {
    }
}

export default FilterBar
