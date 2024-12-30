import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const little = "Little Lemon";
  const big = "Big Lemon";
  const [restaurantName, setRestaurantName] = useState(little)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{restaurantName}</h1>
        <button type="button" onClick={()=>setRestaurantName(big)}>If It's Small</button>
        <button type="button" onClick={()=>setRestaurantName(little)}>If It's Big</button>
      </header>
    </div>
  );
}

export default App;
