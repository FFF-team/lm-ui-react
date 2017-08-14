import React from 'react'
import ModelHOC from '../ModelHOC/index.js';
import './index.scss'

const OperateList = ({// eslint-disable-next-line
                         showState, // eslint-disable-next-line
                         label,
                         tip,
                         className,
                         list,
                         bottom,

                         onActionChange
                     }) => {
    

    let handleClick = (item) => {
        
        // todo: 加promise支持
        onActionChange(item)
        
    };


    return (
        <div className={ className ? className + ' lm-ui-action-sheet' : 'lm-ui-action-sheet' }>
            <ul className="type-wrap">
                <li className="title g-color-grey">
                    { label }
                </li>
                <li>
                    { tip }
                </li>

                {
                    list.map((item, index) => (
                        <li className="item" key={index} onClick={ () => handleClick(item) }>
                            <a>{ item.label }</a>
                        </li>
                    ))
                }
            </ul>
            <ul className="type-wrap">
                {
                    bottom.map((item, index) => (
                        <li key={index}  onClick={ () => handleClick(item) } className="item cancel-item">
                            <a>{ item.label }</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

OperateList.propsType = {
    showState: React.PropTypes.bool,
    label: React.PropTypes.string || React.PropTypes.node,
    tip: React.PropTypes.string || React.PropTypes.node,
    onActionChange: React.PropTypes.func,
    list: React.PropTypes.array,
    bottom: React.PropTypes.array
};

OperateList.defaultProps = {
    showState: false,
    label: '操作的说明或提示',
    tip: '',
    onActionChange: () => {},
    list: [],
    bottom: []
};


export default ModelHOC(OperateList)