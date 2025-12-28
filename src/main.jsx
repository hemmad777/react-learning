
import { createRoot } from "react-dom/client";
import { useState } from "react";


function MyForm(){

  const [myCar,setCar]=useState("");

  const handleChange=(e)=> {
    setCar(e.target.value);  
  }

  return(
    <>
    <form >
      <select value={myCar} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="BMW">BMW</option>
        <option value="Benxe">Bense</option>
      </select>
      <p>{myCar}</p>
    </form>
    </>
  )
}


createRoot(document.getElementById('sandy')).render(
  <MyForm />
)