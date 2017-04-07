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
    value: React.PropTypes.string,
};

SortGroup.defaultProps = {
};

export default SelectableListHOC({
    selectedStyle: {
        color: '#ff552e'
    }
})(SortGroup)