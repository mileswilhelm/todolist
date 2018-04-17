import React, { Component } from 'react';

const ENTER_KEY = 13;

class TodoForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value : '',
			inputClass: 'ui action input'
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit() {
		const todoValue = this.state.value;
		if(todoValue !== '') {
			this.props.addTodo(todoValue);
			this.setState({value: ''});
			return;
		}
		this.setState({inputClass: 'ui action input animated shake'});
		this.timeout = window.setTimeout(() => {
			this.setState({inputClass: 'ui action input'})
		}, 1000);
		// console.log(this);

		return;
		
	}

	handleKeyDown(event) {
		if (event.keyCode !== ENTER_KEY) {
			return;
		}

		event.preventDefault();

		// console.log('enter clicked');
		this.handleSubmit();
	}

	render() {
		return (
			<div className="TodoForm ui center aligned">
				<div className={this.state.inputClass}>
					<input 
						value={this.state.value}
						onChange={this.handleChange}
						onKeyDown={this.handleKeyDown}
					/>
					<button
						className="ui primary button"
						type="submit"
						onClick={this.handleSubmit}
					>Add Item
					</button>
				</div>
			</div>
		);
	}
	
};

export default TodoForm;