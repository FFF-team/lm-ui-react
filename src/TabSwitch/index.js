import React from 'react';
import TabsHOC from '../TabsHOC'

import './index.scss'

class TabSwitch extends React.Component {
    constructor(props) {
        super(props);
        
        this.activeIndex = this.props.activeIndex
    }
    
    componentDidMount() {
        // console.log(this.activeIndex)
    }
    
    // todo: 标签个数限制，文字限制。warn
    render() {
        const isMultiBar = this.props.data.length > 4;
        let navWrapClass = isMultiBar ?  'lm-ui-navbar-box lm-ui-navbar-multi' : 'lm-ui-navbar-box';
        let navClass = isMultiBar ? 'lm-ui-navbar lm-ui-navbar-nowrap' : 'lm-ui-navbar lm-ui-navbar-equal';
        return (
            <div className="lm-ui-navbar-wrap">
                <div className={ navWrapClass }>
                    <ul className={ navClass }>
                        {
                            this.props.data.map((item, index) => (
                                <li className={ this.props.activeIndex === index ? 'active' : '' } name={ item.name } key={ index }>
                                    <a onClick={ (e) => this.props.clickItem(e, index, item) }>{ item.label }</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                { this.props.children }
            </div>
            
            
        )
    }
}

TabSwitch.propTypes = {
    data: React.PropTypes.array,
    clickAction: React.PropTypes.func,
    selectedIndex: React.PropTypes.number,
    withClick: React.PropTypes.bool
};

TabSwitch.defaultProps = {
    data: [],
    clickAction: () => {}, // default click，
    selectedIndex: 0,
    withClick: false
};



export default TabsHOC('doSomething')(TabSwitch)