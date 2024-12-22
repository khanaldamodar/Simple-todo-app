import { useRef, useState, useEffect } from "react";
import TodoList from "./TodoList";

const Todo = () => {

   
    // if there is no todo in local storage, set todo to an empty array
    const [todo, setTodo] = useState(JSON.parse(localStorage.getItem("todo")) || []);
  const ref = useRef();

  const handleAdd = () => {
    const todoText = ref.current.value.trim();

    if (todoText === "") return null;

    const newTodo = {
      id: Date.now(),
      text: todoText,
      completed: false,
    };
    // setTodo([...todo, newTodo])
    setTodo((prev) => [...prev, newTodo]);
    ref.current.value = "";
  };
  const DeleteTodo = (key) => {
    return setTodo((prev) => prev.filter((item) => item.id !== key));
  };
  const handleCompleted = (key, text) => {
    setTodo((prev) => prev.map((item) => item.id === key ? {...item, completed: !item.completed, text: text} : item))
    text.style.decoration = "line-through"

  }
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo))
}, [todo])

  return (
    <>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div>
          <h1 className="text-2xl font-bold mb-4">Add Your Task</h1>
          <input
            type="text"
            ref={ref}
            placeholder="Enter your task"
            className="w-full p-2 border border-gray-300 rounded-md mb-4"
          />
          <button
            onClick={handleAdd}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Add Task
          </button>
        </div>
        <div className="mt-4">
          {todo.map((item, index) => (
            <TodoList
              key={index}
              text={item.text}
              id={item.id}
              completed={item.completed}
              DeleteTodo={DeleteTodo}
              handleCompleted={handleCompleted}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Todo;
