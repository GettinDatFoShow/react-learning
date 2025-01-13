import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const DataFetcher = ({render, url}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (url.includes("desserts")) {
      setData(["cake", "ice cream", "pie", "brownie"]);
    } else {
      setData(["coffe", "soda", "juice"]);
    }
  }, []);

  return render(data);
}

const DessertsCount = () => {
  return (
    <DataFetcher 
      url="https://littlelemon/desserts"
      render={(data)=><p>{data.length} Desserts</p>} 
    />
  )
}

const DrinksCount = () => {
  return (
    <DataFetcher 
      url="https://littlelemon/drinks"
      render={(data)=><p>{data.length} Drinks</p>} 
    />
  )
}

function App() {
  document.title = 'Render Props Example';
  return (
    <div className="App">
      <header className="App-header">
        <h1> Little Lemon Restaurants </h1>
        <DessertsCount />
        <DrinksCount />
      </header>
    </div>
  );
}

export default App;
