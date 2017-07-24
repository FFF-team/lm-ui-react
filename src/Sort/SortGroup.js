import React from 'react'
import SelectableListHOC from '../SelectableListHOC'

class SortGroup extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        const {
            value, // SelectableListHOC
            onSelectedChange, // SelectableListHOC
            
            children,
            activeClassName,
            className,
            ...other
        } = this.props;
        
        
        return (
            <div className="lm-ui-sort-group" { ...other }>
                {
                    children
                }
            </div>
        )
    }
}

SortGroup.PropTypes = {
    value: React.PropTypes.string,
    onSelectedChange: React.PropTypes.func
};

SortGroup.defaultProps = {
    onSelectedChange: () => {}
};

export default SelectableListHOC({
    // selectedStyle: {
    //     color: '#ff552e'
    // },
    selectedClassName: 'lm-ui-sort-active'
})(SortGroup)