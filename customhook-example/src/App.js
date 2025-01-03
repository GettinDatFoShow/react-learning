import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import useConsoleLog from './useConsoleLog';

function App() {
  document.title = 'React Custom Hook Example';
  const [count, setCount] = useState(0); 
  useConsoleLog(count);
  function increment() { 
    setCount(prevCount => prevCount + 1) 
  } 

  return (
    <div className="App">
      <header className="App-header">
        <h1>Count: {count}</h1> 
        <button onClick={increment}>Plus 1</button> 
      </header>
    </div>
  );
}

export default App;
