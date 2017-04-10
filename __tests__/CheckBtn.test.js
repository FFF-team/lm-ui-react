import React from 'react';
import CheckBtn from '../src/CheckBtn';
import { shallow, render, mount } from 'enzyme';
import sinon from 'sinon';
/*
 * 测试点（渲染，初始化，交互）
 * 1.render结构是否正常
 * 2.检查初始值
 * 3.检查点击事件，反馈是否正常
 */
let onChange = sinon.spy();
const normalCheckBtn = <CheckBtn
						btnMap={[{ text: '有', value: true }, { text: '无', value: false }]}
						selectedValue={true}
						onChange={onChange} />;

describe('Test CheckBtn', () => {

	it('render the CheckBtn wrapper', () => {

		const wrapper = shallow(normalCheckBtn);
	  	const wrapperClass = wrapper.find('.lm-ui-check-btn-wrap');
	  	
	  	expect(wrapperClass.length === 1);

	});

	it('init checkBtn item', () => {

		const wrapper = mount(normalCheckBtn);
	  	const initVal = wrapper.props().selectedValue;

	  	expect(initVal).toBe(true);

	});

	it('change checkBtn value after click it', () => {

		const wrapper = mount(normalCheckBtn);

		wrapper.find('.lm-ui-check-btn').at(0).simulate('change');

	  	expect(onChange.called).toBe(true);

	});

});

