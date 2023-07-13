import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'
import { useTodo } from '../hooks/useTodo'

export const TodoApp = () => {

    const { todos, handleDeleteTodo, handleNewTodo, handleToggleTodo, todosCount, todosPending } = useTodo()

    return (
        <>
            <h1>TodoApp: {todosCount}, <small>Pendientes: {todosPending} </small></h1>
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

