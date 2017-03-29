/**
 * Created by khongyan on 2017/3/29.
 */
import React from 'react';
import { Tabs, Tab, TabSwitch } from 'src/Tabs'

/**
 * data = [
 *   {
 *     label: String, 每个标签显示的内容
 *     onClick: Func [可选]自定义每个选项点击后的行为。params：item 当前选中项
 *   },
 *   ...
 * ]
 *
 * clickAction 通用的点击行为，如果data中clickItem存在，则点击后执行clickItem
 * @type {[*]}
 */

class UseTabSwitch extends React.Component {
    
    constructor(props) {
        super(props);
        this.data = [{
            label: '标签1'
        }, {
            label: '标签2'
        }, {
            label: '标签3',
            onClick: (item) => {
                console.log(`this is custom item click, click is ${item.label}`);
                this.setState({
                    currentCont: item.label
                })
            }
        }, {
            label: '标签4'
        }, {
            label: '标签5'
        }, {
            label: '标签6'
        }];
        
        this.state = {
            currentCont: ''
        }
    }
    
    clickAction(item) {
        console.log('this is tab1 custom common click');
        this.setState({
            currentCont: item.label
        })
        
    }
    
    clickAction2(item) {
        console.log('this is tab2 custom common click');
    }
    
    clickTab(item) {
        console.log(`点击了tab2中的${item.label}`);
    }
    
    render() {
        let initSelected = {
            selectedIndex: 0,
            withClick: false,
            clickAction: this.clickAction.bind(this)
        };
        
        let initSelected2 = {
            selectedIndex: 1,
            withClick: false,
            clickAction: this.clickAction2.bind(this)
        }
        return (
            <div>
                <p>tab类型1：simple 只有一个content dom</p>
                <TabSwitch data={ this.data }
                           { ...initSelected }>
                    <div>{ this.state.currentCont }</div>
                </TabSwitch>
                
                <div style={{height: '100px'}}></div>
                
                <p>tab类型2：不同tab对应不同content dom</p>
                <Tabs { ...initSelected2 }>
                    <Tab label="标签1" onClick={ this.clickTab.bind(this) }>
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
        )
    }
}

export default UseTabSwitch