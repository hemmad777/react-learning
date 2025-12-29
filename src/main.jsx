
import { createRoot } from "react-dom/client";
import { useState } from "react";


function MyForm(){

  const [input,setInput]=useState({});

  const handleChange=(e)=> {
    const value=e.target.type==='checkbox'?e.target.checked:e.target.value
    setInput(values=>  ({...values,[name]: value}));
    const name=e.target.name;
  }

  const handleSubmit= (e)=>{
    e.preventDefault()

    let wanted=''
    if(input.tomato) wanted+=' tomato';
    if (input.onion) {
      if (input.tomato) {
        wanted+='and'
      }
      wanted+='onion'
    }
    if (wanted=='') {
      wanted+='no fillings'
    }
    alert(`${input.Name} wanted a burgger with ${wanted}`)
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
      
      <p>I want a burger with</p>
      <label htmlFor="">tomato:
        <input
         type="checkbox"
         name="tomato"
         checked= {input.tomato}
         onChange={handleChange}
        />
      </label>
      <label htmlFor="">onion:
        <input
         type="checkbox"
         name="onion"
         checked={input.onion}
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