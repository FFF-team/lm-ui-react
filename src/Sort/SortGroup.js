import React from 'react'
import SelectableListHOC from 'src/SelectableListHOC'

class SortGroup extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        const {
            children,
            value,
            onSelectedChange,
            ...other
        } = this.props;
        
        
        return (
            <div { ...other }>
                {
                    children
                }
            </div>
        )
    }
}

SortGroup.PropTypes = {
    value: React.PropTypes.number,
};

SortGroup.defaultProps = {
    value: 0,
};

export default SelectableListHOC({
    selectedStyle: {
        color: '#ff552e'
    }
})(SortGroup)