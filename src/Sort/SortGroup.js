import React from 'react'
import SelectableFilterHOC from '../SelectableListHOC'

class SortGroup extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        const {
            children,
            selectedValue,
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
    selectedValue: React.PropTypes.number,
};

SortGroup.defaultProps = {
    selectedValue: 0,
};

export default SortGroup