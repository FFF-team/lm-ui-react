import React from 'react'

import {ListItem, List, SelectableListHOC, Divider} from 'src/index'

const SelectableList = SelectableListHOC({
    selectedClassName: 'lm-ui-active'
})(List);

class FilterList extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            selectedValue: this.props.defaultValue
        }
    }
    
    handleChange = (event, value, item) => {
        this.props.onChange && this.props.onChange({
            value,
            item
        });
        
        this.setState({
            selectedValue: value
        })
    };
    
    selectAction2({value}) {
        console.log('点击了filterList中的第二项' + value)
    }
    
    render() {
        const {
            onChange,
            value,
            showState,
            ...other
        } = this.props;
        
        return (
            <SelectableList value={ this.state.selectedValue }
                            onSelectedChange={ this.handleChange }
                            { ...other }>
                <ListItem value={ 'byTime' }
                           primaryText="按时间"
                />
                
                <Divider/>
                
                <ListItem value={ 'byNo' }
                           primaryText="按序号"
                           onClick={ this.selectAction2 }
                />
    
                <Divider/>
                
                <ListItem value={ 'byName' }
                          
                           primaryText="按名称"
                />
            </SelectableList>
        )
    }
}

FilterList.PropTypes = {
    onChange: React.PropTypes.func
};

export default FilterList