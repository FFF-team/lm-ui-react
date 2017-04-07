import React from 'react'
import {shallow, mount, render} from 'enzyme';
import Tabs from './Tabs';

describe('<Tabs />', () => {
    const Tab = () => ( <div /> );
    
    describe('uncontrolled tabs', () => {
        test('get right selectedIndex', () => {
            const wrapper = shallow(
                <Tabs initSelectedIndex={ 6 }>
                    <Tab />
                    <Tab />
                </Tabs>
            );
            
            expect(wrapper.state().selectedIndex).toEqual(0)
        })
    });
    
    describe('controlled tabs', () => {
        test('get right selectedIndex', () => {
            const wrapper = shallow(
                <Tabs value="b">
                    <Tab value="a"/>
                    <Tab value="b"/>
                </Tabs>
            );
            
            expect(wrapper.state().selectedIndex).toEqual(1)
        });
        
        test('get right selectedIndex when change props', () => {
            const wrapper = shallow(
                <Tabs value="b">
                    <Tab value="a"/>
                    <Tab value="b"/>
                </Tabs>
            );
            
            wrapper.setProps({
                children: [
                    <Tab value="b"/>,
                ]
            });
            
            expect(wrapper.state().selectedIndex).toEqual(0)
        })
    });
    
});