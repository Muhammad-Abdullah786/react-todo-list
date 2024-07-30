import { useContext, useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoForm() {
  const [todo, setTodo] = useState(""); // for every indivisual todo
  // but the addTodo functionalty is inside app.jsx
  // we will use  useTodo from todocontext
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return; // there is no id why? because it is already define in app.jsx
    addTodo({ todo: todo, completed: false }); // we will put it in object WHY ???  goto app.jsx line no . 9
    // all todo are in array and new todo will be in an object
    //then why should i put string only we have to put string in an object
    setTodo(""); // to clean up the input feild so we can write another todo msg
  };
  return (
    <form onSubmit={add} className="flex items-center space-x-2">
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        placeholder="Write Todo..."
        className="flex-1 border-2 border-green-600 rounded-l-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-500 bg-white/90 shadow-md transition-all duration-200"
      />
      <button
        type="submit"
        className="rounded-r-lg px-4 py-2 bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold shadow-md hover:from-green-600 hover:to-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200 transform hover:scale-105"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
