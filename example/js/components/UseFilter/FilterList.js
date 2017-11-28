import React from 'react'
import PropTypes from 'prop-types';
import {ListItem, List, SelectableListHOC, Divider} from 'src/index'

const SelectableList = SelectableListHOC({
    selectedClassName: 'lm-ui-active'
})(List);

class FilterList extends React.Component {

    handleChange = (event, value, item) => {
        this.props.onChange && this.props.onChange({
            value,
            item
        });

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
            <SelectableList initValue={ this.props.defaultValue }
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
    onChange: PropTypes.func
};

export default FilterList
