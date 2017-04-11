import React from 'react';
import { List }  from 'src/index.js';
import { ListGroup } from 'src/index.js';
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

				<List 
					label={this.data.label}
					value={this.data.value}
					arrow={this.data.arrow}
					icon={this.data.icon}
					onClick={this.data.onClick}
				></List>

				<List 
					label={this.data.label}
					value={this.data.value}
					arrow={this.data.arrow}
				></List>

				<ListGroup>
					<List
						label={this.data.label}
						value={this.data.value}
						icon={this.data.icon}
					></List>

					<List 
						label={this.data.label}
						value={this.data.value}
						activeNumber={this.data.activeNumber}
						arrow={this.data.arrow}
					></List>
				</ListGroup>
				
			</div>
			
		)

	}

}