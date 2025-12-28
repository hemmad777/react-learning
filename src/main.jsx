
import { createRoot } from "react-dom/client";
import { useState } from "react";


function MyForm(){

  const [input,setInput]=useState({firstName:"umaar",lastName:"hemmad"});

  const handleChange=(e)=> {
    const name=e.target.name;
    const value=e.target.value;
    setInput(values=>  ({...values,[name]: value}));
  }

  return(
    <>
    <form >
      <label htmlFor="">first Name:

        <input 
        type="text" 
        name="firstName"
        value={input.firstName}
        onChange={handleChange}
        />
      </label>
      <br />
      <label htmlFor="">Last name:
        <input
         type="text"
         name="lastName"
         value={input.lastName}
         onChange={handleChange}
        />
      </label>
      <p>{input.firstName} {input.lastName}</p>
    </form>
    </>
  )
}


createRoot(document.getElementById('sandy')).render(
  <MyForm />
)