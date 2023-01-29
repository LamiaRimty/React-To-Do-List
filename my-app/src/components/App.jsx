import { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
const [inputText,setInputText]=useState("");
const [todoItems,SetTodoItems]=useState([]);

function handleChange(event){
  const newValue=event.target.value;
  setInputText(newValue);
}

function addTodoItem(){
  SetTodoItems((prevValue)=>{ 
    return [...prevValue,inputText]
  });
  setInputText("")
}
  return (
    <div className="container">
      <div className="heading">
       <h1>What's your Plan Today?</h1> 
       </div>
         <div>
           <input
           onChange={handleChange}
            value={inputText}
            type="text"
            placeholder="Add a todo"
           
            name="text"
            />
             <button onClick={addTodoItem} >
               <span>Add</span>
             </button>
         
          <div>
           <ul>
            { todoItems.map((todoItem)=>(<ToDoItem text={todoItem}/>))}
           </ul>
          </div>
          </div>
    </div>
  );
}
export default App;