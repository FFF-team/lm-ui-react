import React from 'react';
import Input from '../src/Input';
import { shallow, render, mount } from 'enzyme';
import sinon from 'sinon';
/*
 * 测试点（渲染，初始化，交互）
 * 1.render结构是否正常
 * 2.检查初始值
 * 3.检查点击事件，反馈是否正常
 */
let onChange = sinon.spy();
let onClick = sinon.spy();
const normalInput = <Input
						name={'a2'}
						type='input' 
						value={''}
						defaultText={'aaa'}
						onChange={onChange} />;

describe('Test Input', () => {

	it('render the Input wrapper', () => {

		const wrapper = shallow(normalInput);
	  	const wrapperClass = wrapper.find('.lm-ui-input-wrap');
	  	
	  	expect(wrapperClass.length === 1);

	});

	it('init input item', () => {

		const wrapper = mount(normalInput);
	  	const initVal = wrapper.find('input').props().value;

	  	expect(initVal).toBe('');

	});

	it('test input type textarea', () => {

		const wrapper = mount(<Input
						name={'a2'}
						type='textarea' 
						value={''}
						defaultText={'aaa'}
						onChange={onChange} />)
	  	const wrapperClass = wrapper.find('textarea');
	  	
	  	expect(wrapperClass.length === 1);

	});

	it('change input value after change it', () => {

		const wrapper = mount(normalInput);

	  	wrapper.find('input').simulate('change');
	  	expect(onChange.called).toBe(true);

	});

	// it('test close btn', () => {

	// 	const wrapper = mount(<Input 
	// 						type='input'
	// 						value={'1'}
	// 						defaultText={'aaa'}
	// 						cleanBtn={{ state: true, cleanFun: onClick}}
	// 						onChange={onChange} />);
	// 	console.log(wrapper.find('.lm-ui-input-core div'))
	//   	wrapper.find('.lm-ui-input-core div').simulate('click');
	//   	console.log(wrapper.find('.lm-ui-input').props())
	//   	expect(onClick.called).toBe(true);

	// });

});

