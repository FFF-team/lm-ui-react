import React from 'react';
import './index.scss';
/*
 * props:
 *	name
 *  selectedValue  isRequired
 *  onChange       isRequired
 *  children       isRequired
 * 功能特点:
 *  将onChange回调函数&name&selectedValue分发给下面的radio
 *  不用在每个radio上绑定函数，赋值name，判断是否选中，方便书写。
 */

const propTypes = {

	name: React.PropTypes.string,
	selectedValue: React.PropTypes.oneOfType([

      React.PropTypes.string,
      React.PropTypes.number,
      React.PropTypes.bool

    ]).isRequired,
    onChange: React.PropTypes.func.isRequired

};

const defaultProps = {};

const childContextTypes = {

	radioGroup: React.PropTypes.object

};

export default class RadioGroup extends React.Component {

	getChildContext () {

		const {name, selectedValue, onChange} = this.props;

		return {
		
			radioGroup: {

        		name, selectedValue, onChange

      		}

		};

    }

	render () {

		const { children, name, selectedValue, onChange, ...arg } = this.props;

		return (

			<div className="lm-ui-radio-group" {...arg}>

				{ children }

			</div>

		)

	}

}

RadioGroup.propTypes = propTypes;
RadioGroup.defaultProps = defaultProps;
RadioGroup.childContextTypes = childContextTypes;