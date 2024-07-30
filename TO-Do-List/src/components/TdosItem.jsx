import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoItem({ todo }) {
  //as always first i have to do is bring the context
  const { toggleComplete, deleteTodo, updateTodo } = useTodo();
  // state for is todo editable
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  // state for new todo msg when user update the todo
  // why i put todo.title because i have destructure the todo object in line 4 (that object come from context)
  const [newTodoMsg, setNewTodoMsg] = useState(todo.title);

  const edit = () => {
    updateTodo(todo.id, { ...todo, title: newTodoMsg });
    setIsTodoEditable(false);
  };
  // const deleteTodoItem = () => {
  //   deleteTodo(todo.id);
  // };
  // dont need that we have already declared that in line 68
  const toggleTodo = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`flex items-center border-2 rounded-lg px-4 py-2 gap-x-3 shadow-md transition-all duration-300 ${
        todo.completed ? "bg-green-100" : "bg-purple-100"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer h-6 w-6 accent-green-600"
        checked={todo.completed}
        onChange={toggleTodo}
      />
      <input
        type="text"
        className={`flex-1 border-2 rounded-lg px-2 py-1 outline-none transition-all duration-200 bg-transparent ${
          isTodoEditable
            ? "border-green-300 focus:border-green-500"
            : "border-transparent"
        } ${todo.completed ? "line-through text-gray-500" : ""}`}
        value={newTodoMsg}
        onChange={(e) => setNewTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm border-2 transition-all duration-200 ${
          todo.completed
            ? "cursor-not-allowed opacity-50"
            : "cursor-pointer hover:bg-green-500 hover:text-white"
        }`}
        onClick={() => {
          if (todo.completed) return;
          if (isTodoEditable) {
            edit();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="w-8 h-8 flex items-center justify-center rounded-lg text-sm border-2 bg-red-100 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-200"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
