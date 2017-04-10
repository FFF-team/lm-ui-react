import React from 'react';
import RadioGroup from '../src/RadioGroup';
import Radio from '../src/Radio';
import { shallow, render, mount } from 'enzyme';
import sinon from 'sinon';
/*
 * 测试点（渲染，初始化，交互）
 * 1.render结构是否正常
 * 2.检查初始值
 * 3.检查点击事件，反馈是否正常
 */
let onChange = sinon.spy();
const normalRadio = <RadioGroup
						name={'radioName'}
						selectedValue={1}
						onChange={onChange}
						>

						<Radio text={'11'} value={1} />
						<Radio text={'22'} value={2} />
						<Radio text={'33'} value={3} />

					</RadioGroup>;

describe('Test Radio', () => {

	it('render the Radio wrapper', () => {

		const wrapper = shallow(normalRadio);
	  	const wrapperClass = wrapper.find('.lm-ui-radio-group');
	  	
	  	expect(wrapperClass.length === 1);

	});

	it('init Radio value', () => {

		const wrapper = mount(normalRadio);
	  	const initVal = wrapper.props().selectedValue;

	  	expect(initVal).toBe(1);

	});

	it('change radio value after click it', () => {

		const wrapper = mount(normalRadio);

	  	wrapper.find('input').at(2).simulate('change');
	  	expect(onChange.called).toBe(true);

	});

})