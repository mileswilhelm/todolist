import React from 'react';

import TodoItem from './TodoItem';

const TodoList = ({todos, remove, edit}) => {
	if (todos.length > 0) {
		const todosItems = todos.map((todo, index) => {
			// console.log(todo.todo.id);
			return (
				<TodoItem 
					todo={todo.todo}
					key={todo.todo.id}
					remove={remove}
					edit={edit}
				 />
			);
		});	

		return (
			<div className="TodoList ui segments">
				{todosItems}
			</div>
		);
	}
	return (
		<div className="ui message">
			<p>Add an item with the input above!</p>
		</div>
	);
	
};

export default TodoList;