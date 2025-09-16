import './App.css';
import { useState } from 'react';



const title = "The Memory Game"

function clicked() {
  setCount(count + 1);
}

function MemoryDiv() {
  const [count, setCount] = useState(0);
  return (
    <div className="MemoryContainer">
       <p className="App-attempts">Attempts: {count}</p>
       <button onclick="clicked()"> click here</button>
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <header className="App-header"> {title}</header> 
      <MemoryDiv />
    </div>
  );
}

export default App;
