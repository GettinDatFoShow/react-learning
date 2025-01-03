import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';

function App() {
  document.title = 'React UseRef Example'
  const formInputRef = useRef(null);

  const focusInput  = () => {
    formInputRef.current.focus();
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1> Using useRef to Access Underlying DOM </h1>
        <input ref={formInputRef} type="text"/>
        <button onClick={focusInput}>
          Focus Input
        </button>
      </header>
    </div>
  );
}

export default App;
