import React from 'react';
import { Tabs, Tab, Icon } from 'src/index'
import './index.scss'
import TopBanner from '../TopBanner';

class UseTab extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            curTab: '标签1',
            value: 'tab1'
        }
    }
    
    changeAction(item) {
        console.log('this is custom common click');
    }
    
    changeAction2(value, tab) {
        console.log(value);
        // alert('tabs on change');
        this.setState({
            curTab: tab.props.label,
            value: value
        })
    }
    
    clickTab(tab) {
        // alert(`点击了tab中的${tab.props.label}`);
    }
    
    render() {
        return (
            <div>
                <TopBanner name={this.props.location.query.name} />
                <div style={{height: '200px'}}>
                    <Tabs initSelectedIndex={ 2 }
                          className='test'>
                        <Tab label="标签1"
                             onSelectAction={ this.clickTab.bind(this) }>
                            <div className="demo-tab-content">this is tab1 content</div>
                        </Tab>
                        <Tab label="标签2">
                            <div className="demo-tab-content">this is tab2 content</div>
                        </Tab>
                        <Tab label="标签3">
                            <div className="demo-tab-content">this is tab3 content</div>
                        </Tab>
                    </Tabs>
                </div>
                
                <div style={{marginTop: '20px', height: '200px'}}>
                    <Tabs onSelectedChange={this.changeAction2.bind(this)}
                          value={ this.state.value }>
                        <Tab label="标签1" value="tab1"/>
                        <Tab label="标签2" value="tab2" onSelectAction={ this.clickTab }/>
                        <Tab label="标签3" value="tab3"/>
                        <Tab label="标签4" value="tab4"/>
                        <Tab label="标签5" value="tab5"/>
                        <Tab label="标签6" value="tab6"/>
                        <Tab label="标签7" value="tab7"/>
                    </Tabs>
                    <div className="lm-ui-navbar-content demo-tab-content">
                        { this.state.curTab }
                    </div>
                </div>
            </div>
        )
    }
}

export default UseTab