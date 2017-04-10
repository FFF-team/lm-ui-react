import React from 'react';
import Switch from '../src/Switch';
import { shallow, render, mount } from 'enzyme';
import sinon from 'sinon';
/*
 * 测试点（渲染，初始化，交互）
 * 1.render结构是否正常
 * 2.检查初始值
 * 3.检查点击事件，反馈是否正常
 */
const onChange = sinon.spy();
const normalSwitch = <Switch
						checked={true} 
						onChange={onChange} />;

describe('Test Switch', () => {

	it('render the Switch wrapper', () => {

		const wrapper = shallow(normalSwitch);
	  	const wrapperClass = wrapper.find('.lm-ui-check-switch');
	  	
	  	expect(wrapperClass.length === 1);

	});

	it('init Switch item', () => {

		const wrapper = shallow(normalSwitch);
	  	const initVal = wrapper.props().checked;

	  	expect(initVal).toBe(true);

	});

	it('change switch value after click it', () => {

		const wrapper = mount(normalSwitch);

		wrapper.find('.lm-ui-check-switch').simulate('change');
	  	
	  	expect(onChange.called).toBe(true);

	});

});

