import React from 'react';

const TodosList = ({todos, setTodos, setEditTodo}) => {

    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return {...item, completed: !item.completed}
                }
                return item;
            }))
    }
    const handleDelete = ({id}) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const handleEdit = ({id}) => {
        const findTodo = todos.find(todo => todo.id === id)
        setEditTodo(findTodo)
    }

    return (
        <div>
            {todos.map((todo) => (
                <li className = "list-item" key={todo.id}>
                    <input type = "text"
                           value = {todo.title}
                           className = {`list ${todo.completed ? 'complete' : ""}`}
                           onChange = {(event) => event.preventDefault()}
                    />
                    <div>
                        <button className = "task-button button-complete" onClick={() => handleComplete(todo)}>
                            <i className = "fa fa-check-circle"></i>
                        </button>
                        <button className = "task-button button-edit" onClick={() => handleEdit(todo)}>
                            <i className = "fa fa-edit"></i>
                        </button>
                        <button className = "task-button  button-delete" onClick={() => handleDelete(todo)}>
                            <i className = "fa fa-trash"></i>
                        </button>
                    </div>
                </li>


            ))}

        </div>
    );
};

export default TodosList;