import React from 'react'

import { Sort, SortGroup, SvgIcon, ModelHOC } from 'src/index'
import FilterList from  './FilterList'

const ModelList = ModelHOC(FilterList);

class FilterBar extends React.Component {
    constructor(props){
        super(props);
        
        this.sort1By = 0;
        
        this.state = {
            sort: '',
            sort1: '',
            sort1Label: '单条件',
            sort2: '',
            selectedValue: '0',
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
    
    
    handleFilterListChange = (value, item) => {
        console.log(value);
    
        this.props.onFilterChange(value, this.sort1By);
        
        this.setState({
            sort1: value,
            sort1Label: item.props.primaryText,
            isShowList: false
        })
    };
    
    handleSelectChange = (value, item) => {
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
    
    selectAction1() {
        console.log('select action 1')
    }
    
    render() {
        return (
            <div>
                <SortGroup className="demo-filter-bar"
                           value={ this.state.selectedValue }
                           onSelectedChange={ this.handleSelectChange }
                           activeClassName="demo-sort-active"
                >
                    <Sort value='0'
                          label="按序号"
                          sortInfo={ ['单项排序key'] }
                          clickAction={ this.handleClick }
                          onSelectAction={ this.selectAction1 }
                    />
                    <Sort value='1'
                          label={ this.state.sort1Label }
                          sortInfo={ [{key: this.state.sort1, sortBy: this.sort1By}] }
                          clickAction={ this.handleClick1 }
                    />
                    <Sort value='2'
                          label="按名称"
                          sortInfo={ ['双向排序b', '双向排序c'] }
                          clickAction={ this.handleClick2 }
                    />
                    <Sort value='3'
                          label="多条件"
                          icon={
                              <SvgIcon viewBox="0 0 1024 1024">
                                  <path d="M933.447123 176.422082l0.319272 0.277316c0 0-186.985672 187.004091-249.315252 249.335718-4.408403 4.409426-13.05841 12.504802-15.44476 18.263969-2.493797 6.021134-2.185782 18.920932-2.185782 25.438369 0 119.209032 1.583055 467.095277 1.583055 467.095277s0.429789 25.140587-25.019837 25.154913c-19.715017 0.010233-20.682042-19.348674-20.682042-25.154913 0-163.261341-0.073678-384.173706-0.105401-473.818399-0.008186-23.821545-1.835811-28.482705 0.754177-37.136805 3.01773-10.087753 21.23872-23.288402 29.017894-30.332842 62.153572-56.274678 250.135944-250.104221 250.135944-250.104221l-0.100284-0.23536c4.789073-4.093225 7.995091-10.012028 7.995091-16.836457 0-12.405541-10.048867-22.476921-22.454408-22.476921L136.053164 105.891725c-12.405541 0-22.474874 10.07138-22.474874 22.476921 0 6.804986 3.227508 12.742209 8.015557 16.836457l-0.081864 0.23536c0 0 182.491311 186.204889 245.902526 245.480924 6.268774 5.860475 28.880771 23.441898 32.753985 34.842553 2.316765 6.813173 1.266853 41.066301 1.266853 41.066301l0 254.029624c0 0-2.949168 9.471722-22.437012 9.403161-17.992793-0.064468-21.807678-9.471722-21.807678-9.471722s-2.494821-173.352163 0.007163-254.597559c0.172939-5.587252-1.003863-17.262152-2.731204-21.986757-2.238994-6.125511-10.45205-14.3181-15.103999-18.48705-65.579601-58.766428-249.111614-249.019517-249.111614-249.019517l0.299829-0.277316c-12.800537-12.105712-20.853957-29.082362-20.853957-48.053436 0-36.659945 29.696346-66.355267 66.355267-66.355267L887.946836 62.014402c36.659945 0 66.355267 29.695323 66.355267 66.355267C954.30108 147.33972 946.249707 164.31637 933.447123 176.422082L933.447123 176.422082 933.447123 176.422082zM933.447123 176.422082"/>
                              </SvgIcon>
                          }
                    />
                </SortGroup>
                
                <ModelList  value={ this.state.sort1 }
                            showState={this.state.isShowList}
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