import React from 'react';
import Dialog from '../src/Dialog';
import { shallow, mount } from 'enzyme';

describe('Test Alert', () => {

	test('exist alert component', () => {
		
	  	const wrapper = mount(

	    	<Dialog />

	  	);
	  	const p = wrapper.find('.lm-ui-dialog');

	  	expect(p.length===1);

	});

	test('head text', () => {
		
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

});