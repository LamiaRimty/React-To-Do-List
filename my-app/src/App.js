import { useState } from "react";


function App() {
  const [inputText,setInputText]=useState("");
  const [todo,SetTodo]=useState([]);
  


  function handleChange(event){
    setInputText(event.target.value);
  }

  return (
    <div className="container">
      <div className="heading">
       <h1>What's your Plan Today?</h1> 
       </div>
         <form onSubmit={todoList}>
           <input
           onChange={handleChange}
            type="text"
            placeholder="Add a todo"
            value={inputText}
            name="text"
            //className="todoInput"
            />
             <button type="submit"
             onClick={addTodo} >
               <span>Add</span>
             </button>
         
          <div>
           <ul>
             {todos.map((todoItem)=><li>{todoItem}</li>)}
           </ul>
          </div>
          </form>
    </div>
  );
}
export default App;
