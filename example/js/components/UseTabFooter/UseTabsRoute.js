import React from 'react'
import {Link} from 'react-router'
import {SvgIcon, Icon} from 'src/index'


const UseTabsRoute = (props) => {
    return (
        <div>
            {
                React.Children.map(props.children, e => {
                    return <div>{e}</div>
                })
            }
            <div className="lm-ui-footer-nav">
                <Link to={{pathname: '/UseTabsRoute/tab1'}}
                      className='lm-ui-footer-nav-item'
                      activeStyle={{color: 'red'}}>
                    
                    <Icon className="demo-footer-icon" data-icon="1"/>
                    
                    <p className="lm-ui-footer-nav-content">list页面</p>
                    
                </Link>
                
                <Link to={{pathname: '/UseTabsRoute/tab2'}}
                      className='lm-ui-footer-nav-item'
                      activeStyle={{color: 'red'}}>
                    
                    <Icon className="demo-footer-icon" data-icon="2"/>
                    
                    <p className="lm-ui-footer-nav-content">当前页面</p>
                    
                </Link>
                
                <Link to={{pathname: '/UseTabsRoute/tab3'}}
                      className='lm-ui-footer-nav-item'
                      activeStyle={{color: 'red'}}>
    
                    <SvgIcon viewBox="0 0 24 24">
                        <path d="M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z"/>
                    </SvgIcon>
                    
                    <p className="lm-ui-footer-nav-content">demo页面</p>
                    
                </Link>
            </div>
        </div>
    
    )
};

export default UseTabsRoute