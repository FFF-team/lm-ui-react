import React from 'react'
import {Tabs, Tab, Icon, SvgIcon} from 'src/index'
import {TabsFooter} from 'src/index'
import './index.scss'

class UseTabFooter extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            value: 'a'
        }
    }
    
    clickHome(tab) {
        alert('to router ' + tab.props['data-route'])
    }
    
    handleChange = (value) => {
        this.setState({
            value: value
        })
    };
    
    
    render() {
        const tabStyle = {
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%'
        };
        
        return (
            <div>
                <TabsFooter style={ tabStyle }
                            className='test'
                            value={ this.state.value }
                            onSelectedChange={ this.handleChange }
                >
                    <Tab label="list页面"
                         value="a"
                         icon={ <Icon className="demo-icon-test">icon</Icon> }
                         data-route="/home"
                         onClick={ this.clickHome }
                    />
                    <Tab label="demo页面"
                         icon={
                             <SvgIcon>
                                 <path d="M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z"/>
                             </SvgIcon>
                         }
                         value="b"
                    />
                    <Tab label="当前页面"
                         icon={
                             <SvgIcon className="test" color="#333" viewBox="0 0 24 24">
                                 <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                             </SvgIcon>
                         }
                         value="c"
                    />
                </TabsFooter>
            </div>
        )
    }
}

export default UseTabFooter