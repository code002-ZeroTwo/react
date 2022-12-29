function Todos({ todo , toggle}) {
  function handleChange(){
    toggle(todo.id);
  }
  return (
    <div>
      <input type="checkbox" checked={todo.completed} onChange = {handleChange} />
      {todo.name}
    </div>
  );
}

export default Todos;
