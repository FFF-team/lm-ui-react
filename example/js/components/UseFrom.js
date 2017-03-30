import React from 'react';
import { Form,
		FormGroup,
		Label,
		Input } from '../../../src/index.js';

export default class UseAlert extends React.Component {

	constructor (props) {

		super (props);
		this.state = {

			test1: ''

		}

	}

	render () {

		return (

			<Form>

				<FormGroup>

					<Label>

						<span className="lm-">hello wolrd im label</span>

					</Label>

					<Input 
						type='input'
						value={this.state.test1}
						onChange={(e) => {this.setState({test1: e.target.value})}} />

				</FormGroup>

			</Form>

		)

	}

}