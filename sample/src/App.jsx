// import './App.css'
// import Todo from './Todo'

// function App(){
// const ls=["a","b","c","d"]

//   return (
//     <>
//      <ul>
//       {
//         ls.map((l,ind)=><Todo val={l}/>)
//       }
//      </ul>
//     </>
//   )
// }

// export default App

// 2.STATE

// import { useState } from 'react';
// import './App.css';
// import Todo from './Todo';

// function App() {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//  if(count>0){
//     setCount(count  -0);
//}
//   };

//   return (
//     <>
//       <button onClick={increment}>Increment {count}</button>
//       <button onClick={decrement}>Decrement {count}</button>
//      <div>count:{count}</div> 
//     </>
//   );
// }

// export default App;


// 3.TODOS
// import { useState } from "react";
// import './App.css';
// import Todo from './Todo';
// function App() {
//   const [todos, setTodos] = useState([]);
//   const [inputValue, setInputValue] = useState("");
//   const [editIndex, setEditIndex] = useState(null); 
//   const [editValue, setEditValue] = useState("");

//   const addTodo = () => {
//     if (inputValue.trim()) {
//       setTodos([...todos, { text: inputValue, completed: false }]);
//       setInputValue("");
//     }
//   };

//   const toggleTodo = (index) => {
//     setTodos(
//       todos.map((todo, i) =>
//         i === index ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };
//   const removeTodo = (index) => {
//     setTodos(todos.filter((_, i) => i !== index));
//   };

//   const startEdit = (index) => {
//     setEditIndex(index);
//     setEditValue(todos[index].text); 
//   };

//   const saveEdit = () => {
//     if (editValue.trim()) {
//       setTodos(todos.map((todo, i) =>i === editIndex ? { ...todo, text: editValue } : todo));
//       setEditIndex(null);
//       setEditValue(""); 
//     }
//   };
//   return (
// <div>
//   <div>
//     <input type="text" value={inputValue}onChange={(e) => setInputValue(e.target.value)}placeholder="Add a new task"/>
//     <button onClick={addTodo}>Add</button>
//   </div>
//     <ul>
//       {todos.map((todo, index) => (
//         <li key={index}>
//         {editIndex === index ? (
//   <div>
//     <input type="text"  value={editValue} onChange={(e) => setEditValue(e.target.value)}/>
//     <button onClick={saveEdit}>Save</button>
//     <button onClick={() => setEditIndex(null)}>Cancel</button>
//   </div>
//     ) : (
//        <>
//       <span onClick={() => toggleTodo(index)}>{todo.text}</span>
//       <button onClick={() => startEdit(index)}>Edit</button>
//       <button onClick={() => removeTodo(index)}>Delete</button>
//        </>
//       )}
//     </li>
//     ))}
//      </ul>
//     </div>
//   );
// }
// export default App;


// 4.MULTIINPUT


// import {useState} from 'react'
// import './App.css'
// function App() {
//  const [val,setVal]=useState({name:"",age:"",cls:""})
//  const handleChane=(e)=>{
//   console.log(e.target.name);
//   console.log(e.target.value);
//   setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
//  }
//  const handleSubmit=(e)=>{
//   e.preventDeafault();
//   console.log(val);
//  }
//     return (
//       <>
//       <form action="">
//        <input type="text" name='name' onChange={handleChane} placeholder='name' />
//        <input type="text" name='age'  placeholder='age' onChange={handleChane} />
//        <input type="text" name='cls'  placeholder='class' onChange={handleChane} />
//          <button onClick={handleSubmit}>add</button>
//           </form>
      
//       </>
//     );
//   }
//   export default App;

// 5. FORM

// import {useState} from 'react'
// import './App.css'
// function App() {
//  const [val,setVal]=useState({name:"",age:"",email:"",gender:"",place:""})
//  const handleChane=(e)=>{
//   console.log(e.target.name);
//   console.log(e.target.value);
//   setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
//  }
//  const handleSubmit=(e)=>{
//   e.preventDefault();
//   console.log(val);
//  }
//     return (
//       <>
//       <form action="">
//         <label htmlFor="">name</label>
//        <input type="text" name='name' onChange={handleChane} placeholder='name' /><br/>
//        <label htmlFor="">age</label>
//        <input type="text" name='age'  placeholder='age' onChange={handleChane} /><br/>
//        <label htmlFor="">email</label>
//        <input type="text" name='email'  placeholder='email' onChange={handleChane} /><br/>

//        <label htmlFor="">gender</label><br/>
//        male<input type="radio" name='gender' value='male' onChange={handleChane}/>
//        female<input type="radio" name='gender' value='female' onChange={handleChane}/>
//        other<input type="radio" name='gender' value='other' onChange={handleChane}/><br/>
//       <label htmlFor="">place</label>
//        <select id="dropdown">
//         <option>kozhikode</option>
//         <option>wayanad</option>
//         <option>malappuram</option>
//        </select>

//         <br/> <button onClick={handleSubmit}>Submit</button>
//           </form>
      
//       </>
//     );
//   }
//   export default App;


