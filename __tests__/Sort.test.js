import React from 'react'
import {shallow, mount, render} from 'enzyme';
import { Sort } from '../src/Sort';
import EnhancedToggle from '../src/Sort/EnhancedToggle'

describe('<Sort />', () => {
    let wrapper;
    const onChange = (status) => {
        wrapper.instance().toggleStatus(status)
    };
    
    
    test('sort single: without arrow', () => {
        const wrapperToggle = mount(<EnhancedToggle onParentShouldUpdate={ onChange }/>);
        wrapper = shallow(<Sort sortInfo={[{'key': 'ssss'}]}/>);
    
        wrapperToggle.find('input').simulate('change');
        
        expect(wrapper.state().sortBy).toEqual('')
    });
    
    test('sort single: with arrow', () => {
        const wrapperToggle = mount(
            <EnhancedToggle toggle={ false }
                            onParentShouldUpdate={ onChange } />
        );
        wrapper = shallow(<Sort sortInfo={[{'key': 'ssss', 'sortBy': 1}]}/>);
        
        wrapperToggle.find('input').simulate('change');
    
        expect(wrapper.state().sortBy).toEqual(1)
    });
    
    test('sort toggle: with two arrow', () => {
        wrapper = shallow(<Sort sortInfo={ ['key1', 'key2'] }/>);
        const wrapperToggle = mount(
            <EnhancedToggle toggle={ true }
                            onParentShouldUpdate={ onChange }
                            />
        );
    
        // todo: simulate 并不能改变checkbox真实点击后checked状态，只是简单调用onChange方法
        // wrapperToggle.find('input').simulate('change', { target: { checked: 'true' } });
    
        wrapperToggle.find('input').simulate('change', { target: { checked: 'true' } });
        
        expect(wrapper.state().sortBy).toEqual(1);
    
    })
});