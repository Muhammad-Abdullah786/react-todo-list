import { useContext, createContext } from 'react'

export const TodosContext = createContext({
    todo : [
        {
            id : 1,
            title : "todo msg",
            title : "todo msg",
        },
        {},
        {},
    ]
});

export const TodoProvider = TodosContext.Provider

//hook 
export const useTodo = () => {
    return useContext(TodosContext)
}