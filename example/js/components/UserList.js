import React from 'react';
// import { List }  from 'src/index.js';
// import { ListGroup } from 'src/index.js';
import { List, ListItem, Icon, NotifyLabel, Divider } from 'src/index'
import TopBanner from './TopBanner';

export default class UserList extends React.Component {

	constructor (props) {

		super (props);

		this.data = {
			label:'电话号码',
			value:'1381100000',
			arrow: true,
			icon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAb1BMVEX/////ZiL/zLX/aCX/aif/+/r/9vH/8u3/4tT/xKr/f0b/bi3/7ub/vJ7/cjP/2Mf/z7n/tZT/mWz/lmf/lGT/gkr/ej7/6d7/dDX/+PX/9/T/vqH/sY7/r4v/rYj/p4D/pXz/kmH/jVr/hU7/v6L1eRWZAAAA3klEQVQoz62S6W7DIBAGGQ4bgx3fjnNfff9nrJ3Gakpxf3WkFR+MAK204pv01GvdH1MRQXqeeBlx0JW7XdnBL5t66q9U48OXj3RL7DgFsqdcYkkfSM1+iXt0ICHI/yXNuhzZLjFnDGRLscSCNpAVm/x1caQSATcGO6924CZCkgfqkiQXxSMJnbHZBjZzZda8m7y4e97w9yJ/qW2jQLn2fKisrQ7n1s375tnah0Y3Mvnxv2ymw6m3DK6RsUmvkIlhqigZgwCxAvwtFSbuDEo4ahN1NU5IVpFCSKeIoJwUn6sjCIIVrVgaAAAAAElFTkSuQmCC',
			activeNumber:2,
			onClick:function(){console.log('----点击----')}
		}

	}

	render () {

		return (
			<div>

				<TopBanner name={this.props.location.query.name} />
				
				<List>
					
					<ListItem secondaryText='次要内容'
							  primaryText='主要内容'
							  leftIcon={ <Icon style={{
								  backgroundImage: `url(${this.data.icon})`
							  }}/> }
					/>
					
					<Divider/>
					
					<ListItem secondaryText={ <span style={{color: 'red'}}>次要内容</span> }
							  primaryText='主要内容'
							  rightArrow={ true }
							  onClick={ (e) => { console.log(e.target) } }
							  
					/>
					
					<Divider inset={ true }/>
					
					<ListItem secondaryText={ <span>次要内容</span> }
							  primaryText='主要内容'
							  rightArrow={ true }
							  rightIcon={ <NotifyLabel content={ 1 }/> }
							  leftIcon={ <Icon><img width={'100%'} src="http://img.58cdn.com.cn/finance/58/m/img/lottery_m/bigLottery_logo.7de7ae83.png"/></Icon> }
					
					/>
					
					<Divider/>
					
					<ListItem rightArrow={ true }>
						<div style={{display: 'flex'}}>
							<div style={{width: 60}}>
								<Icon style={{ width: 50, height: 50, background: 'red' }}/>
							</div>
							<div>
								<p>自定义内容</p>
								<p>次要内容</p>
							</div>
						</div>
						
					</ListItem>
					
				</List>
				
			</div>
			
		)

	}

}