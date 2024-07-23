import { useContext, createContext } from 'react'

export const TodosContext = createContext({
    todo: [
        {
            id: 1,
            title: "todo msg",
            completed: false,
        },
        {},
        {},
    ],
    addTodo: (title) => { },
    deleteTodo: (id) => { },
    updateTodo: (id, title) => { },
    toggleComplete: (id) => { },
});

export const TodoProvider = TodosContext.Provider

//hook 
export const useTodo = () => {
    return useContext(TodosContext)
}