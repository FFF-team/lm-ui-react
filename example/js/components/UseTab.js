import React from 'react';
import { Tabs, Tab, TabSwitch } from 'src/index'
import { Icon } from 'src/index'

class UseTabSwitch extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            curTab: '标签1'
        }
    }
    
    changeAction(item) {
        console.log('this is custom common click');
    }
    
    changeAction2(name, tab) {
        alert('tabs on change');
        this.setState({
            curTab: tab.props.label
        })
    }
    
    clickTab(tab) {
        alert(`点击了tab中的${tab.props.label}`);
    }
    
    render() {
        let initSelected = {
            selectedIndex: 0,
            // changeAction: this.changeAction.bind(this)
        };
        
        return (
            <div>
                <div style={{height: '200px'}}>
                    <Tabs { ...initSelected } className='test'>
                        <Tab label="标签1"
                             onClick={ this.clickTab.bind(this) }>
                            <div>this is tab1 content</div>
                        </Tab>
                        <Tab label="标签2">
                            <div>this is tab2 content</div>
                        </Tab>
                        <Tab label="标签3">
                            <div>this is tab3 content</div>
                        </Tab>
                    </Tabs>
                </div>
                
                <div style={{marginTop: '20px', height: '200px'}}>
                    <Tabs changeAction={this.changeAction2.bind(this)}>
                        <Tab label="标签1"/>
                        <Tab label="标签2" onClick={ this.clickTab }/>
                        <Tab label="标签3"/>
                        <Tab label="标签4"/>
                        <Tab label="标签5"/>
                        <Tab label="标签6"/>
                        <Tab label="标签7"/>
                    </Tabs>
                    <div className="custom-cont">
                        { this.state.curTab }
                    </div>
                </div>
            </div>
        )
    }
}

export default UseTabSwitch