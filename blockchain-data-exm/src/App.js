import './App.css';
import { useEffect, useState } from 'react';

function ChoiceSelector(props) {

  function onChangeCurrency(currency) {
    props.updateCurrency(currency);
  }

  return (
    <div>
      {
        props.currencys.map((currency) => 
          <button key={currency}  onClick={()=>onChangeCurrency(currency)}> {currency} </button>
        )
      }
    </div>
  )
}

function App() {

  document.title = 'Blockchain Data'

  const [coinData, setCoinData] = useState({}); 
  const [choice, setChoice] = useState({coin: 'bpi', currency: 'USD'});
  const [chartName, setChartName]  = useState('Bitcoin');
  const [disclaimer, setDisclaimer] = useState('');

  const currencys = ['USD', 'GBP', 'EUR'];
  
  function handleNewData(newData) {
    setCoinData(newData[choice.coin][choice.currency]);
    setChartName(newData.chartName);
    setDisclaimer(newData.disclaimer);
  }

  function fetchCoinData() {
    fetch(`https://api.coindesk.com/v1/${choice.coin}/currentprice.json`) 
    .then((response) => response.json()) 
    .then((jsonData) => handleNewData(jsonData)) 
    .catch((error) => console.log(error));
  }

  function updateCurrency(newChoice) {
    setChoice(() => {
      return {...choice, currency: newChoice}
    })
  }

  useEffect(() => { 
     fetchCoinData();
  }, [choice]); 

  return (
    <div className="App">
      <header className="App-header">
        <h1>Coin Desk Data</h1>
      </header>
      <main>
        <h1>Current {chartName}/{choice.currency} Data</h1> 
        <p>Code: {coinData.code}</p> 
        <p>Symbol: {coinData.symbol}</p> 
        <p>Rate: {coinData.rate}</p> 
        <p>Description: {coinData.description}</p> 
        <p>Rate Float: {coinData.rate_float}</p> 
        <div>
          <h2>Update Currency</h2>
          <ChoiceSelector updateCurrency={updateCurrency} currencys={currencys}/>
        </div>
        <div style={{textAlign: 'center', paddingLeft: '3em', paddingRight: '3em'}}>
          <h4>
            {disclaimer}
          </h4>
        </div>
      </main>
    </div>
  );
}

export default App;
