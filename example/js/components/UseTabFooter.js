import React from 'react'
import { Tabs, Tab, Icon } from 'src/index'
import TabsFooter from 'src/index'

class UseTabFooter extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            name: 'a'
        }
    }
    
    clickHome(tab) {
        alert('to router ' + tab['data-route'])
    }
    
    handleChange(name) {
        this.setState({
            name: name
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
                            name={ this.state.name }>
                    <Tab label="list页面"
                         name="a"
                         icon={ <Icon className="test">icon</Icon> }
                         data-route="/home"
                         onClick={ this.clickHome }/>
                    <Tab label="demo页面"
                         icon={ <Icon className="test">icon</Icon> }
                         name="b"/>
                    <Tab label="当前页面"
                         icon={ <Icon className="test">icon</Icon> }
                         name="c"/>
                </TabsFooter>
            </div>
        )
    }
}

export default UseTabFooter