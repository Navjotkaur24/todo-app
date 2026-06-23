import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function TodoItem({todo,onToggle,onDelete}){
  return(
    <div className={`todo-item ${todo.done?'done':''}`}>
      <input 
      className="todo-input"
      type='checkbox'
      checked={todo.done}
      onChange={()=>onToggle(todo.id)}
       />
       <span className="todo-text">{todo.text}</span>
      <button className="delete-btn" onClick={()=>{onDelete(todo.id)}}>&times;</button>
    </div>
  )
}
function App(){
  const [todos,setTodos]=useState([]);
  const [inputValue,setInputValue]=useState('');
  function addTodo(){
    if(inputValue==='')return;
    const newTodo={
      id:Date.now(),
      text:inputValue,
      done:false
    }
    setTodos([...todos,newTodo]);
    setInputValue('');
  }
  function toggleTodo(id){
    setTodos(todos.map(todo=> todo.id===id?{...todo,done:!todo.done}:todo))
  }
  function deleteTodo(id){
    setTodos(todos.filter(todo=> todo.id!==id))
  }
  
  return(
    <div>
      <h1>My Todos📝</h1>
      <div className="input-row">
        <input 
        className='input-value'
        placeholder='Add a task....'
        value={inputValue}
        onChange={(e)=>setInputValue(e.target.value)}
        />
        <button 
        className="add-btn"
        onClick={addTodo}>Add</button>
        {todos.length===0 && (
          <p className="empty">No todos yet. Add one above!</p>
        )}
        {todos.map(todo=>(
          <TodoItem 
          key={todo.id}
          todo={todo}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          />
        ))}


      </div>
    </div>
  )
}

export default App
