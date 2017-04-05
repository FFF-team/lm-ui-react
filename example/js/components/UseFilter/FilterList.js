import React from 'react'

import { NList, ListItem } from 'src/index'
import SelectableListHOC from 'src/SelectableListHOC'

const SelectedList = SelectableListHOC({})(NList);

class FilterList extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            selectedValue: 'byTime'
        }
    }
    
    handleChange = (event, value) => {
        this.props.onChange && this.props.onChange(value);
        
        this.setState({
            selectedValue: value
        })
    };
    
    selectAction2(event,item) {
        // console.log(item)
        alert('点击了filterList中的第二项')
    }
    
    render() {
        const {
            onChange,
            ...other
        } = this.props;
        
        return (
            <SelectedList selectedValue={ this.state.selectedValue }
                          onSelectedChange={ this.handleChange }
                          { ...other }>
                <ListItem value={ 'byTime' } primaryText="byTime"/>
                <ListItem value={ 'byNo' } primaryText="byNo" onSelectAction={ this.selectAction2 }/>
                <ListItem value={ 'byName' } primaryText="byName" />
            </SelectedList>
        )
    }
}

FilterList.PropTypes = {
    onChange: React.PropTypes.func
};

export default FilterList