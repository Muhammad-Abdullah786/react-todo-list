import { useEffect, useState } from "react";
import { useTodo, TodoProvider, TodosContext } from "./contexts/index";
import TodoForm from "./components/TodoForm";
import "./App.css";
import TodoItem from "./components/TdosItem";

function App() {
  const [todo, setTodo] = useState([]);

  const addTodo = (title) => {
    // Add Todo Logic here
    // here i have make a new array in prev i have previous value of array
    // in new array create a new object
    setTodo((prev) => [{ id: Date.now(), ...title }, ...prev]);
  };

  const updateTodo = (id, title) => {
    setTodo((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? title : prevTodo))
    );
  };
  const toggleComplete = (id) => {
    setTodo((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  const deleteTodo = (id) => {
    // Delete Todo Logic here
    setTodo((prev) => prev.filter((todo) => todo.id !== id));
  };

  // Local Storage Starts from here
  //now assume someone goes to this site i want to bring all the todo he had written long time ago which hook should i use

  // useEffect(() => {

  // this code is just to  get the todos when someone load my website
  useEffect(() => {
    // the value given will be in string
    const todo = JSON.parse(localStorage.getItem("todos"));
    // to check whether todos exist or not if it does not exist it will crash
    if (todo && todo.length > 0) {
      setTodo(todo);
    }
  }, []);

  // but what about when some one add new todo in the list i will have to make another useeffect to save the todo in local storage when ever the todo state changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);
  return (
    <TodoProvider
      value={{ todo, addTodo, deleteTodo, updateTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todo.map((eachTodoItem) => {
              return (
                <div key={eachTodoItem.id}>
                  <TodoItem todo={eachTodoItem} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
