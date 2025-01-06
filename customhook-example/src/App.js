import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import useConsoleLog from './useConsoleLog';
import usePrevious from './usePrevious';

function App() {
  document.title = 'React Custom Hook Example';

  // first example
  const [count, setCount] = useState(0); 
  useConsoleLog(count);
  function increment() { 
    setCount(prevCount => prevCount + 1) 
  } 

  // second example
  const [day, setDay] = useState("Monday");
  const prevDay = usePrevious(day);
  const getNextDay = () => {
    if (day === "Monday") {
      setDay("Tuesday")
    } else if (day === "Tuesday") {
      setDay("Wednesday")
    } else if (day === "Wednesday") {
      setDay("Thursday")
    } else if (day === "Thursday") {
      setDay("Friday")
    } else if (day === "Friday") {
      setDay("Monday")
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Count: {count}</h1> 
        <button onClick={increment}>Plus 1</button> 
        <br/>
        <h1>
        Today is: {day}<br />
        {
          prevDay && (
            <span>Previous work day was: {prevDay}</span>
          )
        }
      </h1>
      <button onClick={getNextDay}>
        Get next day
      </button>
      </header>
    </div>
  );
}

export default App;
