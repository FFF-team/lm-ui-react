import SelectableListHOC from '../SelectableListHOC'
import NList from './NList'

const SelectableList = SelectableListHOC({
    selectedClassName: 'active'
})(NList);

export default SelectableList