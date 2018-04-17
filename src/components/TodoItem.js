import React, {Component} from 'react';

const ENTER_KEY = 13;
const ESCAPE_KEY = 27;

class TodoItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			editing: false,
			todoContent: this.props.todo.content,
		}

		this.handleChange = this.handleChange.bind(this);		
		this.handleSubmit = this.handleSubmit.bind(this);		
		this.handleKeyDown = this.handleKeyDown.bind(this);		
	}

	componentDidUpdate() {
		if (this.state.editing === true) {
			this.editInput.focus();
		}

		return;
	}

	toggleEditing() {
		// console.log(this.state.editing);
		const toggleEditState = !this.state.editing;
		// console.log(toggleEditState);
		this.setState({editing: toggleEditState});
		// console.log(toggleEditState);
	}

	handleKeyDown(event) {
		if (event.keyCode === ENTER_KEY) {
			event.preventDefault();
			this.handleSubmit();
			this.toggleEditing();
			return;
		}

		if (event.keyCode === ESCAPE_KEY) {
			event.preventDefault();
			this.toggleEditing();
		}

		return;
	}

	handleChange(event) {
		this.setState({todoContent: event.target.value});
	}

	handleSubmit() {
		const todoValue = this.state.todoContent;
		if(todoValue !== '') {
			this.props.edit(this.props.todo.id, todoValue);
			this.setState({todoContent: todoValue});
			return;
		}

		return;
	}

	handleBlur() {
		this.handleSubmit();
		this.toggleEditing();
	}

	render() {
		const editState = this.state.editing;
		return (
			<div 
				className="ui segment"
				id={this.props.todo.id}
				
			>
				{editState ? (
					<input 
						ref={(input) => { this.editInput = input; }}
						value={this.state.todoContent}
						onBlur={() => {this.handleBlur()}}
						onChange={this.handleChange}
						onKeyDown={this.handleKeyDown}
					/>
				) : (
					<span
						onDoubleClick={() => {this.toggleEditing()}}
					>
						{this.props.todo.content}
					</span>
				)}
				<i 
					className="trash red alternate outline large icon right floated"
					onClick={() => {this.props.remove(this.props.todo.id)}}
				></i>
				<i 
					className="edit outline icon right floated large"
					onClick={() => {this.toggleEditing()}}
				></i>			
			</div>
		);
	}
};

export default TodoItem;