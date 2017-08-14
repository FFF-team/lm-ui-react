import React from 'react';
import Button from '../src/Button';
import { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';

/*
 * 测试点（渲染，初始化，交互）
 * 1.render结构是否正常
 * 2.检查点击事件，反馈是否正常
 */

let onClick = sinon.spy();
const normalButton = <Button
                        size='small'
                        btnType='primary'
                        isRadius={false}
                        onClick={onClick}
                        >test</Button>;
describe('Test Button', () => {

    it('render the Button wrapper', () => {

        const wrapper = shallow(normalButton);
        const wrapperClass = wrapper.find('.lm-ui-btn');
        //第一次运行时，在__snapshots__中生成快照内容
        expect(toJson(wrapper)).toMatchSnapshot();
        expect(wrapperClass.length === 1);
        
    })

    it('render the Button wrapper', () => {

        const button = <Button
                        size='long'
                        btnType='colorfulHollow'
                        isRadius={true}
                        onClick={onClick}
                        >test</Button>;
        const wrapper = shallow(button);
        const wrapperClass = wrapper.find('.lm-ui-btn');
        expect(wrapperClass.length === 1);
        
    })

    it('render the Button wrapper', () => {

        const button = <Button
                        size='long'
                        btnType='grayHollow'
                        isRadius={true}
                        onClick={onClick}
                        >test</Button>;
        const wrapper = shallow(button);
        const wrapperClass = wrapper.find('.lm-ui-btn');
        expect(wrapperClass.length === 1);
        
    })

    it('button click event', () => {

        const wrapper = mount(normalButton);
        wrapper.find('.lm-ui-btn').at(0).simulate('click');
        expect(onClick.called).toBe(true);
        //之后每一次进行快照对比时，都会和保存的内容作对比
        expect(toJson(wrapper)).toMatchSnapshot();

    });
})