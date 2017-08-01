import React from 'react';
//import Dialog from '../src/Dialog';
import {funDeepEqual} from '../src/API/Fun/funs';
import { shallow, mount } from 'enzyme';

describe('Test funDeepEqual', () => {

	it('简单值对比1', () => {

		let arg1 = 1,
			arg2 = 1;

		let resulte = funDeepEqual(arg1, arg2)

	  	expect(resulte).toBe(true);

	});	

	it('简单值对比2', () => {

		let arg1 = 1,
			arg2 = 2;

		let resulte = funDeepEqual(arg1, arg2)

	  	expect(resulte).toBe(false);

	});	

	it('简单值对比3', () => {

		let arg1 = 'aaaa',
			arg2 = 'aaaa';

		let resulte = funDeepEqual(arg1, arg2)

	  	expect(resulte).toBe(true);

	});	

	it('简单值对比4', () => {

		let arg1 = 'aaaa',
			arg2 = 'bbbb';

		let resulte = funDeepEqual(arg1, arg2)

	  	expect(resulte).toBe(false);

	});	

	it('简单值对比5', () => {

		let arg1 = true,
			arg2 = true;

		let resulte = funDeepEqual(arg1, arg2)

	  	expect(resulte).toBe(true);

	});	

	it('简单值对比6', () => {

		let arg1 = true,
			arg2 = false;

		let resulte = funDeepEqual(arg1, arg2)

	  	expect(resulte).toBe(false);

	});	

	it('简单值对比7', () => {

		let arg1 = undefined,
			arg2 = false;

		let resulte = funDeepEqual(arg1, arg2)

	  	expect(resulte).toBe(false);

	});	

	it('简单值对比8', () => {

		let arg1 = undefined,
			arg2 = undefined;

		let resulte = funDeepEqual(arg1, arg2)

	  	expect(resulte).toBe(true);

	});	

	it('简单值对比9', () => {

		let arg1 = null,
			arg2 = null;

		let resulte = funDeepEqual(arg1, arg2)

	  	expect(resulte).toBe(true);

	});	

	it('简单值对比10', () => {

		let arg1 = null,
			arg2 = true;

		let resulte = funDeepEqual(arg1, arg2)

	  	expect(resulte).toBe(false);

	});	

	it('复杂值对比1', () => {

		let arg1 = { name: '张三', age: 20 },
			arg2 = { name: '张三', age: 20 };

		let resulte = funDeepEqual(arg1, arg2)

	  	expect(resulte).toBe(true);

	});	

	it('复杂值对比2', () => {

		let arg1 = { name: '张三', age: 20 },
			arg2 = { name: '张三', age: 21 };

		let resulte = funDeepEqual(arg1, arg2)

	  	expect(resulte).toBe(false);

	});	

	it('复杂值对比3', () => {

		let arg1 = { name: '张三', age: 20, time: new Date() },
			arg2 = { name: '张三', age: 20, time: new Date() };

		let resulte = funDeepEqual(arg1, arg2)

	  	expect(resulte).toBe(true);

	});	

	it('复杂值对比4', () => {

		let arg1 = { name: '张三', age: 20, time: new RegExp() },
			arg2 = { name: '张三', age: 20, time: new RegExp() };

		let resulte = funDeepEqual(arg1, arg2)

	  	expect(resulte).toBe(true);

	});	

	it('复杂值对比5', () => {

		let arg1 = { name: '张三', age: 20, obj: { name: '学弟李四', age: 10 }},
			arg2 = { name: '张三', age: 20, obj: { name: '学弟李四', age: 10 }};

		let resulte = funDeepEqual(arg1, arg2)

	  	expect(resulte).toBe(true);

	});	

	it('复杂值对比6', () => {

		let arg1 = { name: '张三', age: 20, obj: { name: '学弟李四', age: 10 }},
			arg2 = { name: '张三', age: 20, obj: { name: '学弟李四', age: 9 }};

		let resulte = funDeepEqual(arg1, arg2)

	  	expect(resulte).toBe(false);

	});

	it('复杂值对比7', () => {

		let arg1 = { name: '张三', age: 20, obj: { name: '学弟李四', age: 10, fun: () => {} }},
			arg2 = { name: '张三', age: 20, obj: { name: '学弟李四', age: 10, fun: () => {} }};

		let resulte = funDeepEqual(arg1, arg2)

	  	expect(resulte).toBe(true);

	});

	it('复杂值对比7', () => {

		let arg1 = { name: '张三', age: 20, obj: { name: '学弟李四', age: 10, fun: () => {} }},
			arg2 = { name: '张三', age: 20, obj: { name: '学弟李四', age: 10, fun: () => {alert(1)} }};

		let resulte = funDeepEqual(arg1, arg2)

	  	expect(resulte).toBe(false);

	});

});