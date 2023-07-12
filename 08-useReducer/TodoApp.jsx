import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'

const initialState = [{
    id: Date.now(),
    description: 'Doblar la ropa',
    done: false
},
{
    id: Date.now() + 1,
    description: 'Lavar la losa',
    done: false
}]

export const TodoApp = () => {
    const [todos, dispatchTodo] = useReducer(todoReducer, initialState)

    const handleNewTodo = (todo) => {
        console.log({ todo })
    }

    return (
        <>
            <h1>TodoApp: 10, <small>Pendientes: 2</small></h1>
            <hr />
            <div className='row'>
                <div className='col-7'>
                    <ul className='list-group'>
                        <TodoList todos={todos} />
                    </ul>
                </div>

                <div className='col-5'>

                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={handleNewTodo} ></TodoAdd>
                </div>

            </div>

        </>
    )
}

