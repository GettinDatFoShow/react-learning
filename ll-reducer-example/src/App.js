import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';

const reducer = (state, action) => {
  if (action.type === 'buy_ingredients' && state.money > 0) return { money: state.money - 10 };
  if (action.type === 'sell_a_meal') return { money: state.money + 10};
  return state; 
}

function App() {
  document.title = 'Reducer Example';

  const initialState = {money:100};

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <header className="App-header">
        <h1> Wallet: {state.money}</h1>
        <div>
          <button onClick={()=>dispatch({type: 'buy_ingredients'})}> Shopping for Veggies!</button>
          <button onClick={()=>dispatch({type: 'sell_a_meal'})}>Serve a Meal to the Customer</button>
        </div>
      </header>
    </div>
  );
}

export default App;
