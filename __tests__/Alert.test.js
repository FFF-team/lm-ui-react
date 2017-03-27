import React from 'react';
import Alert from '../src/Alert';
import { shallow, mount } from 'enzyme';

describe('Test Alert', () => {

	test('exist alert component', () => {
		
	  	const wrapper = mount(

	    	<Alert />

	  	);
	  	const p = wrapper.find('.lm-ui-alert');

	  	expect(p.length===1);

	});

	test('head text', () => {
		
	  	const wrapper = mount(

	    	<Alert 
				showState={true}
				headText={'test head'}
				contentText={'提示内容提示内容提示内容提示内容提示内容提示内容'} 
				btnCommonFun={() => {}}
				btnLeftCbFun={() => {console.log('left fun')}}
				btnRightCbFun={() => {console.log('right fun')}}/>

	  	);
	  	const p = wrapper.find('.alert-head');

	  	expect(p.text()).toBe('test head');

	});	

});