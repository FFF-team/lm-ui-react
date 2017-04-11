import React from 'react';
import ListGroup from '../src/ListGroup'
import List from '../src/List';
import { shallow, render, mount } from 'enzyme';
import sinon from 'sinon';

/*
 * 测试点（渲染，初始化，交互）
 * 1.render结构是否正常
 * 2.检查点击事件，反馈是否正常
 */

let onClick = sinon.spy();
const normalList = <ListGroup>
                        <List
                            label='title'
                            value='value'
                            arrow={true}
                            icon='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAb1BMVEX/////ZiL/zLX/aCX/aif/+/r/9vH/8u3/4tT/xKr/f0b/bi3/7ub/vJ7/cjP/2Mf/z7n/tZT/mWz/lmf/lGT/gkr/ej7/6d7/dDX/+PX/9/T/vqH/sY7/r4v/rYj/p4D/pXz/kmH/jVr/hU7/v6L1eRWZAAAA3klEQVQoz62S6W7DIBAGGQ4bgx3fjnNfff9nrJ3Gakpxf3WkFR+MAK204pv01GvdH1MRQXqeeBlx0JW7XdnBL5t66q9U48OXj3RL7DgFsqdcYkkfSM1+iXt0ICHI/yXNuhzZLjFnDGRLscSCNpAVm/x1caQSATcGO6924CZCkgfqkiQXxSMJnbHZBjZzZda8m7y4e97w9yJ/qW2jQLn2fKisrQ7n1s375tnah0Y3Mvnxv2ymw6m3DK6RsUmvkIlhqigZgwCxAvwtFSbuDEo4ahN1NU5IVpFCSKeIoJwUn6sjCIIVrVgaAAAAAElFTkSuQmCC'
                            onClick={onClick}
                        ></List>
                    </ListGroup>
describe('Test List', () => {

    it('render the List wrapper', () => {

        const wrapper = shallow(normalList);
        const listGroupClass = wrapper.find('.lm-ui-listGroup');
        const wrapperClass = wrapper.find('.lm-ui-list');
        const arrowClass = wrapper.find('.lm-ui-list-link');
        
        expect(listGroupClass.length==1);
        expect(wrapperClass.length === 1);
        expect(arrowClass.length === 1);

    })

    it('List click event', () => {

        const wrapper = mount(normalList);

        wrapper.find('.lm-ui-list').simulate('click');
        expect(onClick.called).toBe(true);

    });


})