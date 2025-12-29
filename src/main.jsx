
import { createRoot } from "react-dom/client";
import { useState } from "react";


function MyForm(){

  const [input,setInput]=useState({});

  const handleChange=(e)=> {
    const value=e.target.type==='checkbox'?e.target.checked:e.target.value
    const name=e.target.name;
    setInput(values=>  ({...values,[name]: value}));
    
  }

  const handleSubmit= (e)=>{
    e.preventDefault()

    let wanted=''
    if(input.apple) wanted ='apple';
    if(input.orange) wanted ='orange';
    if(input.mango) wanted ='mango';
    
    alert(`${input.Name} wanted a ${wanted}`)
  }

  return(
    <>
    <form onSubmit={handleSubmit}>
      <label htmlFor="">first Name:

        <input 
        type="text" 
        name="Name"
        value={input.Name}
        onChange={handleChange}
        />
      </label>
      
      <p>I wanted a </p>

      <label htmlFor="">apple:
        <input 
          type="radio"
          name="apple" 
          value={input.apple}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="">orange:
        <input 
          type="radio"
          name="orange" 
          value={input.orange}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="">mango:
        <input 
          type="radio"
          name="mango" 
          value={input.mango}
          onChange={handleChange}
        />
      </label>
      
      <button type="submit">submit</button>
    </form>
    </>
  )
}


createRoot(document.getElementById('sandy')).render(
  <MyForm />
)