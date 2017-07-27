import React from 'react';
import Button from '../src/Button';
import { shallow, render, mount } from 'enzyme';
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
        
        expect(wrapperClass.length === 1);

    })

    it('button click event', () => {

        const wrapper = mount(normalButton);

        wrapper.find('.lm-ui-btn').simulate('click');
        expect(onClick.called).toBe(true);

    });
})