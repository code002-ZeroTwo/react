import { useEffect, useRef, useState } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([]);
  const todoref = useRef();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("todos"));
    if(stored) setTodos(stored);
    console.log(stored);
  },[])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  function toggleTodo(id){
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  }

  function handleRemove(e){
    let keep = [];
    const copy = [...todos];
    copy.forEach(todo => {
      if (!todo.completed) {
        keep = [
          ...keep,
          todo
        ]
      }
    })
    setTodos(keep);
    console.log(keep);
  }

  function handleAdd(e) {
    const name = todoref.current.value;
    if (name === "") return;
    setTodos((prevtodos) => {
      return [
        ...prevtodos,
        {
          id: uuidv4(),
          name: name,
          completed: false,
        },
      ];
    });
    return (todoref.current.value = "");
  }

  return (
    <>
      <TodoList props={todos} toggle = {toggleTodo} />
      <input type="text" ref={todoref} />
      <button onClick={handleAdd}>add todo</button>
      <button onClick={handleRemove} >remove todo</button>
      <div>{todos.length} left todos</div>
    </>
  );
}

export default App;
