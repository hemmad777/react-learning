
import { createRoot } from "react-dom/client";

function MyForm(){
  return(
    <>
    <form action="">
      <label htmlFor="name">Enter your name</label>
      <input type="text" />
    </form>
    </>
  )
}


createRoot(document.getElementById('sandy')).render(
  <MyForm />
)