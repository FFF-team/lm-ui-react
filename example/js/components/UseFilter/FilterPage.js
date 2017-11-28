import React from 'react'

import './index.scss'
import FilterBar from './FilterBar'
import { List, ListItem, Divider, SelectableListHOC } from 'src/index'
import TopBanner from '../TopBanner';


const SelectableList = SelectableListHOC({
    selectedClassName: 'lm-ui-active'
})(List);

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
        console.log(`===开始筛选：key->${key}, sortBy->${sortBy}===`);
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


        const renderItems = () => {

            let listItems = [];

            this.state.data.forEach((item, index) => {
                listItems.push((
                    <ListItem key={ item.id }
                              secondaryText={ `2017-01-0${index}` }
                              primaryText={ `${item.id}、${item.value}` }
                    />

                ));
                listItems.push(<Divider key={ `divider-${index}` }/>)
            })

            return listItems
        };


        return (
            <div>
                <TopBanner name={this.props.location.query.name} />
                <FilterBar onFilterChange={ this.changeList }/>
                <div>
                    <List>
                        {
                            renderItems()
                        }
                    </List>
                </div>
            </div>
        )
    }
}

export default FilterPage
