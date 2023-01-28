import { useState } from "react";


function App() {
  const [inputText,setInputText]=useState("");
  
  
  function handleClick(event){
    event.preventDefault();
    console.log("Submitted");
  }

  function handleChange(event){
    setInputText(event.target.value);
  }

  return (
    <div className="container">
      <div className="heading">
       <h1>What's your Plan Today?</h1> 
       </div>
         <form onSubmit={handleClick}>
           <input
           onChange={handleChange}
            type="text"
            placeholder="Add a todo"
            value={inputText}
            name="text"
            //className="todoInput"
            />
             <button>
               <span>Add</span>
             </button>
         </form>
          <div>
           <ul>
              <li>A Item</li>
           </ul>
          </div>
    </div>
  );
}

export default App;
