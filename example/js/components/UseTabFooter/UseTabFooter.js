import React from 'react'
import { Tabs, Tab, Icon } from 'src/index'
import { TabsFooter } from 'src/index'
import Desc from './Desc'

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
    
    handleChange(value) {
        this.setState({
            value: value
        })
    }
    
    
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
                            value={ this.state.value }>
                    <Tab label="list页面"
                         value="a"
                         icon={ <Icon className="test">icon</Icon> }
                         data-route="/home"
                         onClick={ this.clickHome }/>
                    <Tab label="demo页面"
                         icon={ <Icon className="test">icon</Icon> }
                         value="b"/>
                    <Tab label="当前页面"
                         icon={ <Icon className="test">icon</Icon> }
                         value="c"/>
                </TabsFooter>
                
                <Desc/>
            </div>
        )
    }
}

export default UseTabFooter