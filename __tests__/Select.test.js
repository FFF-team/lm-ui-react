import React from 'react';
import Select from '../src/Select';
import { shallow, render, mount } from 'enzyme';
import sinon from 'sinon';
/*
 * 测试点（渲染，初始化，交互）
 * 1.render结构是否正常
 * 2.检查初始值
 * 3.检查点击事件，反馈是否正常
 */

const onChange = sinon.spy();
const normalSelect = <Select
				selectedValue={1}
				onChange={onChange}
				optionMap={[{text:1, value:1}, {text:2, value:2}, {text:3, value:3}]} />;

describe('Test Select', () => {

	it('render the Select wrapper', () => {

		const wrapper = shallow(normalSelect);
	  	const wrapperClass = wrapper.find('.lm-ui-select-wrap');
	  	
	  	expect(wrapperClass.length === 1);

	});

	it('init select item', () => {

		const wrapper = shallow(normalSelect);
	  	const initVal = wrapper.find('.lm-ui-select').props().value;

	  	expect(initVal).toBe(1);

	});

	it('change select value after click option', () => {

		const wrapper = mount(normalSelect);

		wrapper.find('select').simulate('change');
		
	  	expect(onChange.called).toBe(true);

	});

});

