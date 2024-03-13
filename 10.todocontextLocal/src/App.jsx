import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts'
import { TodoForm,TodoItem } from './components';

function App() {
  const [todos,setTodos] = useState([]);

  const addToDo = (todo) => {
    setTodos(prev => [
      {id: Date.now(), ...todo},
      ...prev //array of prev todos
    ])
  }

  const updateTodo = (id,todo) => {
    setTodos(prev => prev.map( prevToDo => (prevToDo.id === todo.id ? todo : prevToDo)))
  }

  const deleteTodo = (id) =>{
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos(prev => 
      prev.map(prevToDo => 
        (prevToDo.id === id ? {...prevToDo,completed : !prevToDo.completed}
                            : prevToDo)))
  }

  // when component is mount, get data from local storage and set in todos
  // dependency array is blank so it runs whenever the components mounts
  // localstorage uses string so need to parse json
 useEffect( ()=>{
  const todos = JSON.parse(localStorage.getItem("todos"))
  if(todos && todos.length>0) {
    setTodos(todos);
  }
 },[])

//  run whenever there is change in todos list, ie when updated, added, removed
// localstorage accepts strings to stringify the array
useEffect(() => {
  localStorage.setItem("todos",JSON.stringify(todos))
},[todos])

  return (
    <TodoProvider value={{todos,addToDo,deleteTodo,toggleComplete,updateTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
