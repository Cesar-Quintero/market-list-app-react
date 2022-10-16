import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import LeftToDo from './components/LeftToDo'
import List from './components/List'



const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if(list){
    return JSON.parse(localStorage.getItem('list'))
  } else {
    return []
  }
}




const App = () => {

const [list, setList] = useState(getLocalStorage())
const [name, setName] = useState('')

const handleSubmit = (e) => {
  e.preventDefault()
  setList(
    list.map(item => item)
  )
  const newItem = {id: Math.ceil(Math.random()*100000), title: name, completed: false}
  setList([...list, newItem])
  setName('')
}

const removeItem = (id) => {
  setList(list.filter(item => item.id !== id))
}

useEffect(() => {
  localStorage.setItem('list', JSON.stringify(list))
}, [list])


return (
  <div className="container text-center">
  <section className="row">
    <Header />

    <div>
      <form className ="form" onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder="e.g. eggs" 
        name="todoItem" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        required/>
        <input className="submit" type="submit" />
      </form>
    </div>
    
    {list.length > 0 && (
      <div className="todo">
        <ul className="todoItems list-group">
          <List items={list} removeItem={removeItem} />
        </ul>
      </div>
    )}

    <LeftToDo leftToDo={list.length}/>
  </section>
  </div>
);
}



export default App;



          
