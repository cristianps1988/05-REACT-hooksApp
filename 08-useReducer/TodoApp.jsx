import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer'

export const TodoApp = () => {
    const initialState = [{
        id: Date.now(),
        description: 'Doblar la ropa',
        done: false
    },
    {
        id: Date.now() + 1,
        description: 'Lavar la losa',
        done: false
    }
    ]
    const [todos, dispatchTodo] = useReducer(todoReducer, initialState)
    return (
        <>
            <h1>TodoApp: 10, <small>Pendientes: 2</small></h1>
            <hr />
            <div className='row'>
                <div className='col-7'>
                    <ul className='list-group'>
                        {
                            todos.map(todo => {
                                <li key={todo.id} className='list-group-item d-flex justify-content-between'>
                                    <span className='align-self-center'>Tarea 1</span>
                                    <button className='btn btn-danger'>Borrar</button>
                                </li>
                            })
                        }

                    </ul>
                </div>

                <div className='col-5'>
                    <h4>Agregar TODO</h4>
                    <hr />
                    <form>
                        <input
                            type="text"
                            placeholder='¿Tirala plena mani?'
                            className='form-control'
                        />
                        <button
                            type='submit'
                            className='btn btn-outline-primary mt-1'
                        >
                            Agregar
                        </button>
                    </form>
                </div>

            </div>

        </>
    )
}

