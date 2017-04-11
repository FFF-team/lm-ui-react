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

	radioGroup: React.PropTypes.object

};

export default class Radio extends React.Component {

	render () {

		const { text, value, preffix, suffix, mode, uniqueId, ...arg } = this.props;
		const { name, selectedValue, onChange } = this.context.radioGroup;  
		const optional = {};

		if (selectedValue !== undefined) {

			optional.checked = (value === selectedValue);

		}

		optional.onChange = onChange.bind(null, value);

		switch (mode) {

			case 'form':

				return (

					<div className="lm-ui-radio-wrap">

						<input 
							name={name&&name}
							type="radio" 
							className="lm-ui-radio"
							{...optional}
							{...arg}/>

						{ suffix && suffix }
						<span className="lm-ui-icon-check"></span>
						<div className="lm-ui-radio-label">{text}</div>
						{ preffix && preffix }
						
					</div>

				)

				break;

			case 'button':

				return (

					<div className="lm-ui-radio-wrap-btn">

						<input 
							id={uniqueId}
							name={name&&name}
							type="radio" 
							className="lm-ui-radio"
							{...optional}/>

						<label htmlFor={uniqueId} className="lm-ui-radio-btn" {...arg}>

							{ text }

						</label>

					</div>

				)

				break;

		}

	}

}

Radio.propTypes = propTypes;
Radio.defaultProps = defaultProps;
Radio.contextTypes = contextTypes;