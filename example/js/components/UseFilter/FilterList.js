import React from 'react'

import { NListItem, SelectableList } from 'src/index'

class FilterList extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            selectedValue: 'byTime'
        }
    }
    
    handleChange = (value, item) => {
        this.props.onChange && this.props.onChange(value);
        
        this.setState({
            selectedValue: value
        })
    };
    
    selectAction2(item) {
        // console.log(item)
        alert('点击了filterList中的第二项')
    }
    
    render() {
        const {
            onChange,
            ...other
        } = this.props;
        
        return (
            <SelectableList value={ this.state.selectedValue }
                          onSelectedChange={ this.handleChange }
                          { ...other }>
                <NListItem value={ 'byTime' } primaryText="byTime"/>
                <NListItem value={ 'byNo' } primaryText="byNo" onSelectAction={ this.selectAction2 }/>
                <NListItem value={ 'byName' } primaryText="byName" />
            </SelectableList>
        )
    }
}

FilterList.PropTypes = {
    onChange: React.PropTypes.func
};

export default FilterList