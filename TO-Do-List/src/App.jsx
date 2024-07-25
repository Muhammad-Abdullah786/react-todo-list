import { useState } from "react";
import { useTodo, TodoProvider, TodosContext } from "./contexts/index";

import "./App.css";

function App() {
  const [todo, setTodo] = useState([]);

  const addTodo = (title) => {
    // Add Todo Logic here
    // here i have make a new array in prev i have previous value of array
    // in new array create a new object
    setTodo((prev) => [{ id: Date.now(), ...title }, ...prev]);
  };
   
  const updateTodo = (id, title) => {
    setTodo((prev)=> prev.map((prevTodo) => prevTodo.id === id ? title :  prevTodo))

  }
  
  const deleteTodo = (id) => {
    // Delete Todo Logic here
    setTodo((prev) => prev.filter((todo) => todo.id !== id ))
  };
  return (
    <TodoProvider
      value={{ todo, addTodo, deleteTodo, updateTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}</div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
