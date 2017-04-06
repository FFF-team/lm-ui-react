import React from 'react'

import './index.scss'
import FilterBar from './FilterBar'
import { NList, NListItem } from 'src/index'

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
    
    showSortList() {
        
    }
    
    changeList = (key, sortBy) => {
        console.log('开始筛选：' + key + ',' + sortBy);
        let data;
        
        switch (key) {
            case '单项排序key':
                data = [{
                    id: 1,
                    value: 'item1'
                }, {
                    id: 3,
                    value: 'item3'
                }, {
                    id: 2,
                    value: 'item2'
                }];
                break;
            case 'byTime':
                data = [{
                    id: 1,
                    value: 'item1'
                }, {
                    id: 2,
                    value: 'item2'
                }, {
                    id: 3,
                    value: 'item3'
                }];
                break;
            case 'showList':
                break;
            default:
                data = [{
                    id: 2,
                    value: 'item2'
                }, {
                    id: 1,
                    value: 'item1'
                }, {
                    id: 3,
                    value: 'item3'
                }];
                break;
                
        }
    
        this.setState({
            data: data
        });
    };
    
    
    render() {
        return (
            <div>
                <FilterBar onFilterChange={ this.changeList }/>
                <div>
                    <NList>
                        { this.state.data.map((item) => {
                            return (
                                <NListItem key={ item.id }
                                          primaryText={ `${item.id}、${item.value}` } />
                            )
                        }) }
                    </NList>
                </div>
            </div>
        )
    }
}

export default FilterPage