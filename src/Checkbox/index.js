import React from 'react';
import './index.scss';

/*
 * props:
 * |   参数    | 说明 | 类型 | 默认值 | 是否必要 |
 * | ---------- | ------ | ------ | --------- |
 * | text | 选择项显示的文字 | string or number | 无 | 必要 |
 * | value | 选择项实际的值 | string or number or bool | 无 | 必要 |
 */

const propTypes = {

	text: React.PropTypes.oneOfType([

      React.PropTypes.string,
      React.PropTypes.number,
      React.PropTypes.bool

    ]),
    value: React.PropTypes.oneOfType([

      React.PropTypes.string,
      React.PropTypes.number,
      React.PropTypes.bool

    ]),
    preffix: React.PropTypes.node,
	suffix: React.PropTypes.node,
	mode: React.PropTypes.string,
	uniqueId: React.PropTypes.oneOfType([

      React.PropTypes.string,
      React.PropTypes.number

    ])

};

const defaultProps = {

	mode: 'form' //form || button

};

const contextTypes = {

	checkboxGroup: React.PropTypes.object

};

export default class Checkbox extends React.Component {

	clickHandler () {

		const { value } = this.props;
		const { selectedValue, onChange } = this.context.checkboxGroup; 
		let index =  selectedValue.indexOf(value);
		let newValue = [];

		if (index !== -1) {

			selectedValue.splice(index,1)
			newValue = selectedValue

		} else {

			newValue = selectedValue.concat([value]);

		}

		onChange(newValue);

	}

	render () {

		const { text, value, preffix, suffix, mode, uniqueId, ...arg } = this.props;
		const { name, selectedValue, onChange } = this.context.checkboxGroup;  
		const optional = {};

		if (selectedValue !== undefined) {

			optional.checked = (selectedValue.indexOf(value) !== -1);

		}

		optional.onChange = this.clickHandler.bind(this);

		switch (mode) {

			case 'form':

				return (

					<div className="lm-ui-checkbox-wrap">

						<input 
							name={name&&name}
							type="checkbox" 
							className="lm-ui-checkbox"
							{...optional}
							{...arg}/>

						{ suffix && suffix }
						<span className="lm-ui-icon-check"></span>
						<div className="lm-ui-checkbox-label">{text}</div>	
						{ preffix && preffix }

					</div>

				)

				break;

			case 'button':

				return (

					<div className="lm-ui-checkbox-wrap-btn">

						<input 
							id={uniqueId}
							name={name&&name}
							type="checkbox" 
							className="lm-ui-checkbox"
							{...optional}/>

						<label htmlFor={uniqueId} className="lm-ui-checkbox-btn" {...arg}>

							{ text }

						</label>

					</div>

				)

				break;

		}

	}

}

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;
Checkbox.contextTypes = contextTypes;