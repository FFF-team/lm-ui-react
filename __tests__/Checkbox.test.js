import React from 'react';
import CheckboxGroup from '../src/CheckboxGroup';
import Checkbox from '../src/Checkbox';
import { shallow, render, mount } from 'enzyme';
import sinon from 'sinon';
/*
 * 测试点（渲染，初始化，交互）
 * 1.render结构是否正常
 * 2.检查初始值
 * 3.检查点击事件，反馈是否正常
 */
let onChange = sinon.spy();
const normalCheckbox = <CheckboxGroup
						name={'checkboxName'}
						selectedValue={[1,2]}
						onChange={onChange}
						>

						<Checkbox text={'11'} value={1} />
						<Checkbox text={'22'} value={2} />
						<Checkbox text={'33'} value={3} />

					</CheckboxGroup>;

describe('Test Checkbox', () => {

	it('render the Checkbox wrapper', () => {

		const wrapper = shallow(normalCheckbox);
	  	const wrapperClass = wrapper.find('.lm-ui-checkbox-group');
	  	
	  	expect(wrapperClass.length === 1);

	});

	it('render various mode', () => {

		const normalCheckbox = <CheckboxGroup
						name={'checkboxName'}
						selectedValue={[1,2]}
						onChange={onChange}
						>

						<Checkbox 
							text={'11'} 
							value={1} 
							mode={'button'}
							preffix={<div>preffix</div>} />
						<Checkbox 
							text={'22'} 
							value={2}
							mode={'button'}
							suffix={<div>suffix</div>} />
						<Checkbox 
							text={'33'} 
							value={3}
							mode={'button'}
							uniqueId={'uniqueId1'} />

					</CheckboxGroup>;
		const wrapper = shallow(normalCheckbox);
	  	const wrapperClass = wrapper.find('.lm-ui-checkbox-group');
	  	
	  	expect(wrapperClass.length === 1);

	});

	it('init checkbox value', () => {

		const wrapper = mount(normalCheckbox);
	  	const initVal = wrapper.props().selectedValue;

	  	expect(initVal.length).toBe(2);

	});

	it('change checkbox value after click it', () => {

		const wrapper = mount(normalCheckbox);

	  	wrapper.find('input').at(2).simulate('change');
	  	expect(onChange.called).toBe(true);

	});

})