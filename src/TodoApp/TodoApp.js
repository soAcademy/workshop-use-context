import { useState, useEffect } from 'react'

import TodoHeader from './TodoHeader'
import TodoList from './TodoList'
import TodoForm from './TodoForm'

import './TodoApp.css'

const initialState = {
    id: Date.now(),
    text: 'Buy Milk',
    isComplete: false
}

const TodoApp = () => {
    const [ items, setItems ] = useState([initialState])
    const [ count, setCount] = useState(0)

    const handleToggleTask = (id) => {
        let mappedItems = items.map(task => {
            return task.id === Number(id) ? { ...task, isComplete: !task.isComplete } : { ...task}
        })
        setItems(mappedItems)
    }

    const addTask = (userInput) => {
        const newItems = [...items, { id: Date.now(), text: userInput, isComplete: false }]
        setItems(newItems)
    }

    useEffect(() => {
        let timer = setInterval(() => {
          setCount((count) => count + 1)
        }, 1000)
    
        return () => clearInterval(timer)
    }, [])
  
    return (
        <div>
            <TodoHeader />
            <TodoList items={items}
            // To do useContext to avoid pass count as a props to TodoList
                count={count}
                handleToggleTask={handleToggleTask} />
            <TodoForm addTask={addTask} />
        </div>
    )
}

export default TodoApp