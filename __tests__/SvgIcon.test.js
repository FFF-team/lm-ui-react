import { shallow, mount, render } from 'enzyme';
import React from 'react'
import ReactDom from 'react-dom'
import SvgIcon from '../src/SvgIcon'

describe('<SvgIcon />', () => {
    const pathDom = <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>;
    
    test('render without crashing', () => {
        const div = document.createElement('div');
        ReactDom.render(<SvgIcon/>, div)
    });
    
    test('render children and color', () => {
        const wrapper = shallow(<SvgIcon color="#eee">{ pathDom }</SvgIcon>);
        
        expect(wrapper.contains(pathDom)).toBeTruthy();
        expect(wrapper.get(0).props.style.fill).toEqual('#eee');
    });
    
    test('render overwrite style', () => {
        const style = {
            backgroundColor: 'green',
            width: '30px'
        };
        const wrapper = shallow(
            <SvgIcon style={ style }>
                { pathDom }
            </SvgIcon>
        )
        
        const wrapperStyle = wrapper.get(0).props.style;
        
        expect(wrapperStyle.width).toEqual(style.width);
        expect(wrapperStyle.backgroundColor).toEqual(style.backgroundColor);
    })
});
