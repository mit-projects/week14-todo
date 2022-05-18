
const Todo = ({ index, todo, removeTodo }) => {
    const handleClick = () => {
        removeTodo(index);
    }
    return (
        <div className="todo-item-container">
            <div className="todo-item" key={index} id={`${index}`}>{todo.text}</div>
            <img src="./images/delete.png" className="delete-image" onClick={handleClick} alt="Delete Button" />
        </div>
    )
}