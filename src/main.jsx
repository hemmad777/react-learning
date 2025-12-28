
import { createRoot } from "react-dom/client";
import { useState } from "react";


function MyForm(){

  const [name,setName]=useState("");

  const handleChange=(e)=> {
    setName(e.target.value);  
  }

  return(
    <>
    <form action="">
      <label htmlFor="name">Enter your name
        <input type="text" 
        value={name}
        onChange={handleChange}
        />

      </label>
      <p>Current value {name}</p>
      
  
    </form>
    </>
  )
}


createRoot(document.getElementById('sandy')).render(
  <MyForm />
)