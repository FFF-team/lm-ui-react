import React from 'react';

/*
 * props:
 *	type input || textarea
 *  value 
 *  defaultText
 *  size
 *  disable
 *  preffix
 *  suffix
 *  change
 */

const propTypes = {

	type: React.PropTypes.string,
	value: React.PropTypes.any.isRequired,
	defaultText: React.PropTypes.string,
	size: React.PropTypes.object,
	disable: React.PropTypes.bool,
	preffix: React.PropTypes.node,
	suffix: React.PropTypes.node,
	onChange: React.PropTypes.func

};
const defaultProps = {

	type: null,
	value: null,
	defaultText: 'please input',
	size: {
		cols: 30,
		rows: 20
	},
	disable: false,
	preffix: false,
	suffix: false,
	onChange: () => {}

};

export default class Input extends React.Component {

	constructor (props) {

		super (props);

		this.clickHandler = this.clickHandler.bind(this);

	}

	componentDidMount () {

		console.log('hello world im Input')

	}

	clickHandler (e) {

		/*
		 * 1.拿到value
		 * 2.run onChange
		 * 3.validate HOC
		 */
		let value = e.target.value;
		this.props.onChange(e);

	}

	renderInput () {

		const { type, 
				value, 
				defaultText, 
				disable, 
				preffix, 
				suffix, 
				onChange } = this.props;

		return (

			<div className="lm-ui-input-wrap">

				<input type="text" value={value} className="lm-ui-input" onChange={this.clickHandler} />

			</div>

		)

	}

	renderTextarea () {

		const { type, 
				value, 
				defaultText, 
				disable, 
				preffix, 
				suffix, 
				onChange } = this.props;

		return (

			<div className="lm-ui-input-wrap">

				<input type="text" value={value} className="lm-ui-input" onChange={this.clickHandler} />

			</div>

		)

	}

	render () {

		const { type } = this.props;

		if (type === 'input') {

			return this.renderInput()

		} else if (type === 'textarea') {

			return this.renderTextarea()

		} else {

			return null 

		}
		

	}

}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
