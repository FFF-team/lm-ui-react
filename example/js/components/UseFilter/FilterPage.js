import React from 'react'

import './index.scss'
import FilterBar from './FilterBar'

class FilterPage extends React.Component {
    constructor(props) {
        super(props);
        
        let data = [{
            id: 1,
            value: 'item1'
        }, {
            id: 3,
            value: 'item3'
        }, {
            id: 2,
            value: 'item2'
        }];
        
        this.state = {
            data: data
        }
    }
    
    changeList = (sortKey, sortBy) => {
        console.log(sortKey + ',' + sortBy);
    
        this.setState({
            data: [{
                id: 1,
                value: 'item1'
            }, {
                id: 2,
                value: 'item3'
            }, {
                id: 3,
                value: 'item2'
            }]
        });
    }
    
    
    render() {
        return (
            <div>
                <FilterBar onFilterChange={ this.changeList }/>
                <div>
                    <ul>
                        { this.state.data.map((item) => {
                            return (
                                <li key={ item.id }>{ item.id }、{ item.value }</li>
                            )
                        }) }
                    </ul>
                </div>
            </div>
        )
    }
}

export default FilterPage