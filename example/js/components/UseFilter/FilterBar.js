import React from 'react'

import { Sort, SortGroup } from 'src/index'
import FilterList from  './FilterList'

class FilterBar extends React.Component {
    constructor(props){
        super(props);
        
        this.sort1By = 0;
        
        this.state = {
            sort: '',
            sort1: 'byTime',
            sort2: '',
            selectedValue: 0,
            isShowList: false
        }
    }
    
    
    handleClick = (key, sortBy) => {
        // todo: do something on sort
        console.log(`handleClick sort: ${key} - ${sortBy}`);
        this.props.onFilterChange(key, sortBy);
    }
    
    handleClick1 = (key, sortBy) => {
        // todo: do something on sort1
        console.log(`handleClick sort1: ${key} - ${sortBy}`);
        this.switchList();
        // this.props.onFilterChange(key, sortBy);
    }
    
    handleClick2 = (key, sortBy) => {
        // todo: do something on sort2
        console.log(`handleClick sort2: ${key} - ${sortBy}`);
        this.props.onFilterChange(key, sortBy);
    }
    
    
    handleFilterListChange = (value) => {
        console.log(value);
    
        this.props.onFilterChange(value, this.sort1By);
        
        this.setState({
            sort1: value,
            isShowList: false
        })
    };
    
    handleSelectChange = (event, value) => {
        console.log('筛选条件切换:sort' + value);
        
        this.setState({
            selectedValue: value
        })
    };
    
    switchList() {
        this.setState({
            isShowList: true
        })
    }
    
    render() {
        return (
            <div>
                <SortGroup className="demo-filter-bar"
                           selectedValue={ this.state.selectedValue }
                           onSelectedChange={ this.handleSelectChange }>
                    <Sort value={ 0 }
                          label="单项排序"
                          sortInfo={ ['单项排序key'] }
                          clickAction={ this.handleClick }/>
                    <Sort value={ 1 }
                          label={ this.state.sort1 }
                          sortInfo={ [{key: this.state.sort1, sortBy: this.sort1By}] }
                          clickAction={ this.handleClick1 }/>
                    <Sort value={ 2 }
                          label="双向排序"
                          sortInfo={ ['双向排序b', '双向排序c'] }
                          clickAction={ this.handleClick2 }/>
                </SortGroup>
                
                <FilterList style={{ display:this.state.isShowList ? 'block' : 'none' }}
                            className="demo-filter-bar-list"
                            onChange={ this.handleFilterListChange }/>
            </div>
        )
    }
}

FilterBar.propTypes = {
    onFilterChange: React.PropTypes.func
};

FilterBar.defaultProps = {
    onFilterChange: () => {}
}

export default FilterBar