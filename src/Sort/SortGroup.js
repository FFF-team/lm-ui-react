import React from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames';

const CAN_OPEN_TOGGLE_SORT = ['sortList', 'sortMulti'];
const SAVE_OPEN_STATE = ['sortLabel'];

class SortGroup extends React.Component {

    constructor(props) {
        super(props);

        this.sortInfo = {};

        this.state = {
            children: this.props.children
        }
    }


    componentDidMount() {
        this.setState({
            children: this.props.children.map((child, index) => {

                const childName = child.props.name || `sort_${index}`;
                const sortType = child.props._type;
                const initActiveItem = child.props.initActiveItem;

                this.collectTabInfo(childName, initActiveItem || null, sortType);
                return React.cloneElement(child, {
                    open: this.getInitOpen(sortType, initActiveItem),
                    key: index,
                    name: childName
                })
            })
        })

    }

    getInitOpen(sortType, initData) {
        if (sortType === 'sortLabel') {
            if (initData) {
                return true
            }
            return false
        }

        return false
    }

    collectTabInfo(name, initActiveItem, sortType) {
        if (initActiveItem && sortType === 'sortMulti') {
            this.sortInfo[name] = {
                isAll: false,
                data: initActiveItem
            }
        }  else {
            this.sortInfo[name] = initActiveItem
        }
    }

    getChildContext() {
        return {
            updateSortOpen: (value, state) => {

                this.updateSortOpen(value, state)
            },
            collectTabInfo: (name, info) => {

                this.sortInfo[name] = info;


                // 通知组件
                this.props.onSortInfoUpdate(this.sortInfo)

                this.forceUpdate()
            },
            getSortInfo: (name) => {
                return this.sortInfo[name]
            }
        };
    }




    updateSortOpen(sortName, state) {

        const { children } = this.state;


        const newChildren = children.map((child, index) => {

            const { _type, name, open } = child.props;

            if (sortName === name) {
                return React.cloneElement(child, {
                    open: state,
                    key: index,
                })
            }

            return React.cloneElement(child, {
                open: CAN_OPEN_TOGGLE_SORT.indexOf(_type) > -1 ? false : open,
                key: index,
            })


        });

        this.setState({
            children: newChildren
        })
    }




    render() {

        const {
            // onSelectedChange, // SelectableListHOC

            // children,
            // initValue,  // 初始值，不受控
            // value, // 受控
            className
        } = this.props;

        const { children } = this.state;
        const cn = classnames('lm-ui-sort-group', className);


        return (
            <div className={cn}>
                {
                    children.map((child, index) => {

                        const canOpen = this.sortInfo[child.props.name] && !this.sortInfo[child.props.name].isAll
                        const cnActive = classnames({
                            'lm-ui-sort-wrap-active': canOpen,
                        }, child.props.className);

                        return React.cloneElement(child, {
                            key: index,
                            className: cnActive,
                        })
                    })
                }
            </div>
        )

    }
}


SortGroup.PropTypes = {
    value: PropTypes.string,
    initValue: PropTypes.string
};

SortGroup.defaultProps = {
    value: '',
    initValue: ''
};

SortGroup.childContextTypes = {
    updateSortOpen: PropTypes.func,
    collectTabInfo: PropTypes.func,
    getSortInfo: PropTypes.func
}


export default SortGroup
