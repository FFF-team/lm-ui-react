import React from 'react'

import {Sort, SortGroup, SvgIcon, ModelHOC } from 'src/index'
import FilterList from  './FilterList'
import MultiFilter from './MultiFilter'

const ModelList = ModelHOC(FilterList);

class FilterBar extends React.Component {
    constructor(props) {
        super(props);
        
        this.sort1By = 0;
        
        this.state = {
            sort1: 'byTime', // sort1 key, 默认为空
            sort1Label: '按时间', // sort1 label
            
            selectedValue: '2', // 默认高亮第几个sort
            
            multiFilterSelected: [], // 多选结果
            
            open1: false,
            open2: false,
            open3: false
        }
    }
    
    
    handleClick1 = ({key, sortBy}) => {
        // todo: do something on sort1
        this.props.onFilterChange(key, sortBy);
        this.setState({
            open1: !this.state.open1,
            open3: false
        })
        
    }
    
    handleClick2 = ({key, sortBy}) => {
        // todo: do something on sort2
        this.props.onFilterChange(key, sortBy);
        
        this.setState({
            open1: false,
            open3: false
        })
        
    }
    
    handleClick3 = ({key, sortBy}) => {
       
        this.setState({
            open3: !this.state.open3,
            open1: false
        })
    };
    
    handleClick4 = ({key, sortBy}) => {
        this.props.onFilterChange(key, sortBy);
        
        this.setState({
            open3: false,
            open1: false
        })
    }
    
    handleFilterListChange = (result) => {
        let {value, item } = result;
        
        this.props.onFilterChange(value, this.sort1By);
        
        this.setState({
            sort1: value,
            sort1Label: item.props.primaryText,
            open1: false
        })
        
        return true
    
    };
    
    handleMultiFilterChange = (result) => {
        
        let value = result;
        
        this.props.onFilterChange(value, '');
        
        this.setState({
            multiFilterSelected: value,
            open3: false
        })
        
        return true
        
    };
    
    handleSelectChange = (event, value, item) => {
        console.log('筛选条件切换:sort' + value);
        
        this.setState({
            selectedValue: value,
        })
    };
    
    render() {
        return (
            <div>
                <SortGroup className="demo-filter-bar"
                           value={ this.state.selectedValue }
                           onSelectedChange={ this.handleSelectChange }
                >
                    <Sort value='1'
                          label={ this.state.sort1Label }
                          sortInfo={ [{key: this.state.sort1, sortBy: 1}] }
                          onClick={ this.handleClick1 }
                          open={ this.state.open1 }
                    >
        
                        <ModelList defaultValue={ this.state.sort1 }
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
                          
                          onClick={ this.handleClick3 }
                          open={ this.state.open3 }
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
    
            </div>
        )
    }
}

FilterBar.propTypes = {
    onFilterChange: React.PropTypes.func
};

FilterBar.defaultProps = {
    onFilterChange: () => {
    }
}

export default FilterBar