
function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "Learn react",
      completed: false
    },
    {
      text: "Work on the house",
      completed: false
    },
    {
      text: "Do Math",
      completed: false
    }
  ]);

  const addTodo = (value) => {
    if (!value) return;
    setTodos([...todos, { text: value, completed: false }]);
  }

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1)
    setTodos(updatedTodos);
  }

  return (
    <div className="list-container">
      <h1>To Do List</h1>
      {todos.map((todo, index) => <Todo key={index} todo={todo} index={index} removeTodo={removeTodo} />)}
      <div className="form-container">
        <Form addTodo={addTodo} />
      </div>
    </div >
  )
}

ReactDOM.render(<App />, document.getElementById('root'));