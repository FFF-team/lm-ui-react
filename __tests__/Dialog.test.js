import React from 'react';
import Dialog from '../src/Dialog';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

describe('Test Alert', () => {

	it('exist alert component', () => {
		
	  	const wrapper = mount(

	    	<Dialog />

	  	);
	  	const p = wrapper.find('.lm-ui-dialog');

	  	expect(p.length===1);

	});

	it('head text', () => {
		
	  	const wrapper = mount(

	    	<Dialog
	    		dialogType={'Confirm'} 
				showState={true}
				headText={'test head'}
				contentText={'提示内容提示内容提示内容提示内容提示内容提示内容'} 
				btnCommonFun={() => { console.log("commonFun") }}
				btnLeftCbFun={() => {console.log('left fun')}}
				btnRightCbFun={() => {console.log('right fun')}}/>

	  	);
	  	const p = wrapper.find('.dialog-head');

	  	expect(p.text()).toBe('test head');

	});	

	it('dialog click event', () => {

		const onClick = sinon.spy();
		const onClick1 = sinon.spy();
		const onClick2 = sinon.spy();

		const wrapper = mount(

	    	<Dialog
	    		dialogType={'Confirm'} 
				showState={true}
				headText={'test head'}
				contentText={'提示内容提示内容提示内容提示内容提示内容提示内容'} 
				btnCommonFun={() => { onClick(); }}
				btnLeftCbFun={() => { onClick1(); }}
				btnRightCbFun={onClick2}/>

	  	);

	  	wrapper.find('.dialog-btn').at(0).simulate('click');
	  	wrapper.find('.special').at(0).simulate('click');

	  	expect(onClick.called).toBe(true);
	  	expect(onClick1.called).toBe(true);
	  	expect(onClick2.called).toBe(true);

	});

});