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

const Checkbox = (props, context) => {

	const { text, value, preffix, suffix, mode, uniqueId, ...arg } = props;
	const { name, selectedValue, onChange } = context.checkboxGroup;  
	const optional = {};
	const clickHandler = () => {

		let index =  selectedValue.indexOf(value);
		let newValue = [];

		if (index !== -1) {

			let tmplVal = selectedValue.slice(0);
			tmplVal.splice(index,1);
			newValue = tmplVal;

		} else {

			newValue = selectedValue.concat([value]);

		}

		onChange(newValue);

	};

	if (selectedValue !== undefined) {

		optional.checked = (selectedValue.indexOf(value) !== -1);

	}

	optional.onChange = clickHandler;

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

};

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;
Checkbox.contextTypes = contextTypes;

export default Checkbox;