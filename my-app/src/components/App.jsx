import { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea"

function App() {
const [inputText,setInputText]=useState("");
const [todoItems,SetTodoItems]=useState([]);

function handleChange(event){
  const newValue=event.target.value;
  setInputText(newValue);
}

function addTodoItem(){
  SetTodoItems((prevItems)=>{ 
    return [...prevItems,inputText]
  });
  setInputText("")
}

function deleteItem(id){
 SetTodoItems((prevItems)=>{
    return prevItems.filter((todoItem,index)=>{
        return index!== id;
      });
 });
}

  return (
    <div className="container">
      <div className="heading">
       <h1>What's your Plan Today?</h1> 
       </div>
         <div>
          <InputArea/>
         
          <div>
           <ul>
            { todoItems.map((todoItem,index)=>(
            <ToDoItem 
            id={index}
            key={index}
            text={todoItem}
            onChecked={deleteItem}
            />
            ))}
           </ul>
          </div>
          </div>
    </div>
  );
}
export default App;