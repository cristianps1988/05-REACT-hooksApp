import React, { useState } from 'react'
import { useForm } from '../hooks/useForm'

export const TodoAdd = ({ onNewTodo }) => {

    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    })

    const onSubmit = (e) => {
        e.preventDefault()
        if (description.length <= 1) return

        const newTodo = {
            id: Date.now(),
            done: false,
            description
        }
        onNewTodo(newTodo)
        onResetForm()
    }


    return (
        <form
            onSubmit={onSubmit}
        >
            <input
                type="text"
                placeholder='¿Tirala plena mani?'
                className='form-control'
                value={description}
                name='description'
                onChange={onInputChange}
            />
            <button
                type='submit'
                className='btn btn-outline-primary mt-1'
            >
                Agregar
            </button>
        </form>
    )
}
