import React from 'react'
import Sort from 'src/Sort'

class FilterPage extends React.Component {
    
    
    handleClick(value) {
        console.log(value)
    }
    
    render() {
        return (
            <div>
                <Sort label="筛选" value={ [1, 2] } clickAction={ this.handleClick }/>
            </div>
        )
    }
}

export default FilterPage