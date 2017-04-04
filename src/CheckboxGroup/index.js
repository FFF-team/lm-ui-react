import React from 'react';
import './index.scss';
/*
 * props:
 *	name
 *  selectedValue  isRequired
 *  onChange       isRequired
 *  children       isRequired
 * 功能特点:
 *  将onChange回调函数&name&selectedValue分发给下面的checkbox
 *  不用在每个checkbox上绑定函数，赋值name，判断是否选中，方便书写。
 */

const propTypes = {

	name: React.PropTypes.string,
	selectedValue: React.PropTypes.array.isRequired,
    onChange: React.PropTypes.func.isRequired

};

const defaultProps = {};

const childContextTypes = {

	checkboxGroup: React.PropTypes.object

};

export default class CheckboxGroup extends React.Component {

	getChildContext () {

		const {name, selectedValue, onChange} = this.props;

		return {
		
			checkboxGroup: {

        		name, selectedValue, onChange

      		}

		};

    }

	render () {

		const { children, name, selectedValue, onChange, ...arg } = this.props;

		return (

			<div className="lm-ui-checkbox-group" {...arg}>

				{ children }

			</div>

		)

	}

}

CheckboxGroup.propTypes = propTypes;
CheckboxGroup.defaultProps = defaultProps;
CheckboxGroup.childContextTypes = childContextTypes;