import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
// import Layout from '../05-useLayoutEffect/Layout'
// import Memorize from '../06-memos/Memorize'
// import MemoHook from '../06-memos/MemoHook'
// import CallbackHook from '../06-memos/CallbackHook'
// import { Padre } from '../07-tarea-memo/Padre'
// import SimpleFormWithCustomHook from '../02-useEffect/SimpleFormWithCustomHook'
// import MultipleCustomHooks from '../03-useFetch/MultipleCustomHooks'
// import FocusScreen from '../04-useRef/FocusScreen'
// import SimpleForm from '../02-useEffect/SimpleForm'
// import CounterApp from '../01-useState/CounterApp'
// import CounterCustomH from '../01-useState/CounterCustomHook'
// import HooksApp from './HooksApp'
// import '../08-useReducer/intro-reducer'
// import { TodoApp } from '../08-useReducer/TodoApp'
import { MainApp } from '../09-useContext/MainApp'

ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
    <BrowserRouter>
        <MainApp />
    </BrowserRouter>
    // </React.StrictMode>,
)
