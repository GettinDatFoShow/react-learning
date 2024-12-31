import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState([]);
  document.title = 'Random Customer Data';
  const fetchUserData = () => {
    fetch('https://randomuser.me/api/?results=1')
    .then((response) => response.json())
    .then((responseJson) => setUser(responseJson.results[0]))
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
          { Object.keys(user).length > 0 ? (
          <div>
            <h1>Random Customer Data</h1>
            <h2>{user.name.first} {user.name.last}</h2>
            <img src={user.picture.medium} className="App-logo" alt="user-photo" />
          </div>
        ) : (
          <>
          <h1>Random Customer Data pending...</h1>
          <img src={logo} className="App-logo" alt="app-logo" />
          </>
        )}

        
      </header>
    </div>
  );
}

export default App;
