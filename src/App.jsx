import Welcome from "./Welcome";

function App(){
  return(
    <div className="App">
      <h1>Hello world</h1>

      <Welcome name="sinan" age={29}/>
      <Welcome name="umaar" age={18}/>
    </div>
    
  )
}

export default App;