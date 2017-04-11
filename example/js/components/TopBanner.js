import React from 'react';

const defaultProps = {

	name: 'title',
	backBtn: true

};

export default class TopBanner extends React.Component {

	render () { 

		const { name, backBtn, ...arg } = this.props;

		return (

			<div className="top-banner">

				<div className="topBanner">{name}</div>
				{

					backBtn && <a className="backBtn" href="javascript:history.go(-1);void(0)"></a>

				}

			</div>

		)

	}

}

TopBanner.defaultProps = defaultProps;