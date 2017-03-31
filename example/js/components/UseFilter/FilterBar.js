import React from 'react'

import Sort from 'src/Sort/Sort'
import SortToggle from 'src/Sort/SortToggle'

class FilterBar extends React.Component {
    constructor(props){
        super(props)
        
    }
    
    
    
    handleClick = (sortKey, sortBy) => {
        // todo: do something on sort
        this.props.onFilterChange && this.props.onFilterChange(sortKey, sortBy)
    }
    
    handleClick1 = (sortKey, sortBy) => {
        // todo: do something on sort1
        this.props.onFilterChange && this.props.onFilterChange(sortKey.key, sortBy)
    }
    
    handleClick2 = (sortKey, sortBy) => {
        // todo: do something on sort2
        this.props.onFilterChange && this.props.onFilterChange(sortKey, sortBy)
    }
    
    render() {
        return (
            <div className="demo-filter-bar">
                <Sort label="单项排序" sortKey={ ['单项排序key'] } clickAction={ this.handleClick }/>
                <Sort label="按序号" sortKey={ [{key: '按序号a', sortBy: 0}] } clickAction={ this.handleClick1 }/>
                <SortToggle label="双向排序" sortKey={ ['双向排序b', '双向排序c'] } clickAction={ this.handleClick2 }/>
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