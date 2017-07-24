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

	

};

const defaultProps = {



};

export default class DatePicker extends React.Component {

	constructor(props) {

        super(props);
        this.state = {

        	age: 0

        }

    }

    componentWillMount () {

    	//this.setState({ age:1 })
    	// this.setState({ age: this.state.age + 1 })
    	// debugger
    	// this.setState({ age: this.state.age + 1 })

    }

    componentDidMount () {

    	// this.setState({ age: this.state.age + 1 })
    	// this.setState({ age: this.state.age + 1 })
    	// setTimeout(() => {

	    // 	this.setState({ age: this.state.age + 1 })
	    // 	this.setState({ age: this.state.age + 1 })

    	// }) 

        document.addEventListener('click', () => {
            console.log('document');
        });

    }

    clickHandler (event) {

    	// this.setState({ age: this.state.age + 1 })
    	// debugger
    	// this.setState({ age: this.state.age + 1 })
        event.stopPropagation()
        console.log('合成')

    }

    componentWillReceiveProps () {



    }

	render () {

		console.log(`render--${this.state.age}`)

		return (

			<div onClick={this.clickHandler.bind(this)}>

                {this.state.age}
                <div onClick={this.clickHandler.bind(this)}>aaaaaa</div>

            </div>

		)

	}

}

// DatePicker.propTypes = propTypes;
// DatePicker.defaultProps = defaultProps;