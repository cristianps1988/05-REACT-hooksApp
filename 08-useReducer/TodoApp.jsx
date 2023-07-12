import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'

const initialState = [
    //     {
    //     id: Date.now(),
    //     description: 'Doblar la ropa',
    //     done: false
    // },
    // {
    //     id: Date.now() + 1,
    //     description: 'Lavar la losa',
    //     done: false
    // }
]

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const TodoApp = () => {
    const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init)

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

    return (
        <>
            <h1>TodoApp: 10, <small>Pendientes: 2</small></h1>
            <hr />
            <div className='row'>
                <div className='col-7'>
                    <ul className='list-group'>
                        <TodoList
                            todos={todos}
                            onDeleteTodo={handleDeleteTodo}
                            onToggleTodo={handleToggleTodo} />
                    </ul>
                </div>

                <div className='col-5'>

                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>

            </div>

        </>
    )
}

