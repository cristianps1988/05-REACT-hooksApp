import { useEffect, useReducer } from "react"
import { todoReducer } from '../08-useReducer/todoReducer'



export const useTodo = () => {
    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || []
    }

    const [todos, dispatchTodo] = useReducer(todoReducer, [], init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add todo',
            payload: todo
        }

        dispatchTodo(action)
    }

    const handleDeleteTodo = (id) => {
        dispatchTodo({
            type: '[TODO] Delete todo',
            payload: id
        })
    }

    const handleToggleTodo = (id) => {
        dispatchTodo({
            type: '[TODO] Toggle todo',
            payload: id
        })
    }

    const todosCount = todos.length

    const todosPending = todos.filter(todo => !todo.done).length

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount,
        todosPending
    }
}