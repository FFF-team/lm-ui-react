import React from 'react'

import {CheckboxGroup, Checkbox, Button} from 'src/index'
import TopBanner from '../TopBanner';

class MultiFilter extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.data = [
            {
                title: '标题',
                items: [
                    {
                        key: 'filter1',
                        label: '选项1'
                    },
                    {
                        key: 'filter2',
                        label: '选项2'
                    }
                ]
            },
            {
                title: '标题2',
                items: [
                    {
                        key: 'filter3',
                        label: '选项3'
                    },
                    {
                        key: 'filter4',
                        label: '选项4'
                    }
                ]
            }
        ];
        
        
        this.state = {
            checkboxVal: this.props.checkboxVal
        }
    }
    
    okBtn = () => {
        this.props.onChange(this.state.checkboxVal)
    };
    
    resetBtn = () => {
        this.setState({
            checkboxVal: []
        })
    };
    
    renderItems() {
        return this.data.map((list, i) => {
            return (
                <dl key={ i } className="term-cell">
                    <dt>{ list.title }</dt>
                    <CheckboxGroup
                        name={'checkboxName'}
                        selectedValue={ this.state.checkboxVal }
                        onChange={(val) => {
                            this.setState({checkboxVal: val})
                        }}
                        style={{ flexDirection: 'row' }}
                    >
                        { list.items.map((item, index) => (
                            <dd key={ index }>
                                <a className="lft-item">
                                    <Checkbox mode="button"
                                              uniqueId={ item.key }
                                              text={ item.label }
                                              value={ item.key }
                                    />
                                </a>
                            </dd>)
                        ) }
                    </CheckboxGroup>
                
                </dl>
            )
        })
    }
    
    render() {
        
        const {
            onChange,
            checkboxVal,
            ...other
        } = this.props;
        
        return (
            <div className="demo-multi-filter" { ...other }>
                <TopBanner backBtn={ false } name="筛选" />
                <div className="filter-multi-term">
                    { this.renderItems() }
                </div>
                <div className="btn-group filter-term-ft">
                    <div className='box'>
                        <Button
                            size='long'
                            btnType='grayHollow'
                            isRadius={false}
                            style={{width: '100%'}}
                            onClick={ this.resetBtn }
                        >重置</Button>
                    </div>
                    <div className="box">
                        <Button
                            size='long'
                            btnType='primary'
                            isRadius={false}
                            style={{width: '100%'}}
                            onClick={ this.okBtn }
                        >确定</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default MultiFilter