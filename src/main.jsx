
import { createRoot } from "react-dom/client";
import { useState } from "react";


function MyForm(){

  const [name,setName]=useState("");

  const handleChange=(e)=> {
    setName(e.target.value);  
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    alert(name)
  }

  return(
    <>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Enter your name
        <input type="text" 
        value={name}
        onChange={handleChange}
        />

      </label>
      <input type="submit" />
      
  
    </form>
    </>
  )
}


createRoot(document.getElementById('sandy')).render(
  <MyForm />
)