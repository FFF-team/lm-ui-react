import React from 'react'
import PropTypes from 'prop-types';

import ListItem from '../List/ListItem'
import List from '../List/List'
import SelectableListHOC from '../SelectableListHOC'
import Divider from '../Divider'

const SelectableList = SelectableListHOC({
    selectedClassName: 'lm-ui-active'
})(List);

class FilterList extends React.Component {

    handleChange = (event, value, item) => {

        if (value !== undefined) {
            const ret = this.getItemByValue(value);

            this.props.onChange && this.props.onChange({
                ...ret
            });
        }
    };


    renderList() {
        const { data } = this.props;

        let ret = [];

        data.length && data.map((item, index) => {
            if (index < data.length - 1) {
                ret.push(
                    <ListItem value={ item.value }
                              primaryText={ item.label }
                              key={index}
                    />
                );
                ret.push(<Divider key={`divider-${index}`}/>)
            } else {
                ret.push(
                    <ListItem value={ item.value }
                              primaryText={ item.label }
                              key={index}
                    />
                )
            }
        });

        return ret
    }

    getDefaultValue() {
        const { data } = this.props;

        for(let i = 0, len = data.length; i < len; i ++) {
            if (data[i].isDefault) {
                return data[i].value
            }
        }

        return ''
    }

    getItemByValue(value) {
        const { data } = this.props;

        for(let i = 0, len = data.length; i < len; i ++) {
            if (data[i].value === value) {
                return data[i]
            }
        }

        return ''
    }


    render() {

        const { className, showState, isLoading, defaultValue } = this.props;
        // const defaultValue = this.getDefaultValue();

        if (isLoading) {
            return <p className='sort-loading'>加载中...</p>
        }

        return (
            <SelectableList initValue={ defaultValue }
                            onSelectedChange={ this.handleChange }
                            className={ className }
                            showState={ showState }
            >

                {
                    this.renderList()
                }
            </SelectableList>
        )
    }
}

FilterList.PropTypes = {
    data: PropTypes.array,
    onChange: PropTypes.func,
    showState: PropTypes.bool,
    defaultValue: PropTypes.string,
    className: PropTypes.string
};

export default FilterList
