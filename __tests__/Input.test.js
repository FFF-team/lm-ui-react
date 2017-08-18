import React from 'react';
import Input from '../src/Input';
import { shallow, render, mount } from 'enzyme';
import sinon from 'sinon';
/*
 * 测试点（渲染，初始化，交互）
 * 1.render结构是否正常
 * 2.检查初始值
 * 3.检查点击事件，反馈是否正常
 * 4.根据测试覆盖率，作stmts, branch, funcs, lines相应的fill，希望达到70%以上
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
	//测试textarea
	it('test input type textarea', () => {

		const wrapper = mount(<Input
						name={'a2'}
						type='textarea' 
						value={''}
						defaultText={'aaa'}
						onChange={onChange} />)
	  	const wrapperClass = wrapper.find('textarea');
	  	
	  	expect(wrapperClass.length).toBe(1);

	});
	//测试可控输入
	it('change input value after change it', () => {

		const wrapper = mount(normalInput);

	  	wrapper.find('input').simulate('change');
	  	expect(onChange.called).toBe(true);

	});
	/*
     * 测试close按钮功能相关
     * 	1.存在值的状态下，触发focus，是否显示close按钮。
     *  2.点击close按钮是否执行了回调函数。
     */
	it('test close btn', () => {

		const callback = sinon.spy();
		const normalInput = <Input
								name={'uniqueName'}
								type='input'
								value={'inputValue'}
								cleanBtn={{ state: true, cleanFun: callback }}
								defaultText={'defaultText'}
								onChange={() => {}} />;
		const wrapper = mount(normalInput);
		//不触发focus时
		let closeDom = wrapper.find('.lm-ui-input-close');
		expect(closeDom.length).toBe(0);
		//触发focus时
        wrapper.find('input').simulate('focus');
        closeDom = wrapper.find('.lm-ui-input-close');
        // test point 1
        expect(closeDom.length).toBe(1);
        // test point 2
       	closeDom.simulate('click');
     	expect(callback.called).toBe(true);

	});
	/*
     * 测试validate按功能相关
     * 	1.验证功能是否生效。
     *  2.验证标红字体样式是否正常显示。
     *  3.测试验证错误时，close按钮样式。
     *	4.当处于验证错误状态时，进行input值的改变，继续存在飙红和close按钮
     * 	5.当处于验证错误状态时，清空input的值，则重置验证状态
     */
	it('test validateData', () => {

		const callback = sinon.spy();
		const inputValue = 'inputValue1'; 
		const normalInput = <Input
								name={'uniqueName1'}
								type='input'
								value={inputValue}
								cleanBtn={{ state: true, cleanFun: callback }}
								validateData={{ promptText: '请输入正确的姓名3', validateFun: (value) => { return !!value && (value.trim() != '') && /^[\.·\u4e00-\u9fa5]{2,20}$/.test(value); } }}
								defaultText={'defaultText1'}
								onChange={() => {}} />;

		const wrapper = mount(normalInput);
		let inputDom = wrapper.find('input');
		let closeBtn;
 		let promise = new Promise((resolve, reject) => {

        	inputDom.simulate('focus');
        	inputDom.simulate('blur');
        	setTimeout(() => {

        		resolve();

        	}, 1)

        });
 		//注意此处为异步测试写法，最终需要返回一个promise否则异步代码无效。
        return promise.then(() => {

        	expect(inputDom.hasClass('error')).toBe(true);
        	//测试验证错误时，close按钮样式
        	inputDom.simulate('focus');
        	closeBtn = wrapper.find('.lm-ui-input-close');
        	expect(closeBtn.hasClass('lm-ui-close-error')).toBe(true);
        	//当处于验证错误状态时，进行input值的改变，继续存在飙红和close按钮
        	inputDom.simulate('change');
        	expect(inputDom.hasClass('error')).toBe(true);
        	//当处于验证错误状态时，清空input的值，则重置验证状态
        	wrapper.setProps({ value: '' })
        	inputDom.simulate('change');
        	expect(inputDom.hasClass('error')).toBe(false);

        })

	});

	/*
	 * 报错测试点
	 *	1.因为值验证是个异步过程，所以可能会出现验证时dom节点已经不存在
	 */
	it('test async error', () => {

		const onClick = sinon.spy();
		const normalInput = <Input
								name={'uniqueName1'}
								type='input'
								value={'inputValue1'}
								cleanBtn={{ state: true, cleanFun: () => {} }}
								validateData={{ promptText: '请输入正确的姓名3', validateFun: (value) => { return !!value && (value.trim() != '') && /^[\.·\u4e00-\u9fa5]{2,20}$/.test(value); } }}
								defaultText={'defaultText1'}
								onChange={() => {}} />;

		const wrapper = mount(normalInput);
		let inputDom = wrapper.find('input');

		inputDom.simulate('focus');
    	inputDom.simulate('blur');
    	//异步过程,dom可能已经被移除。
    	wrapper.unmount();
    	let currentInputDom = wrapper.find('input');
    	expect(currentInputDom.length).toBe(0);

	});

});

