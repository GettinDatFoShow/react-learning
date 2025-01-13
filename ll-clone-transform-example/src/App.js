import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const Row = ({children, spacing}) => {

  const childStyle = {
    marginLeft: `$${spacing}px`
  }

  return (
    <div className="row">
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          style: {
            ...child.props.style,
            ...(index > 0 ? childStyle: {})
          }
        });
      })}
    </div>
  )
}

function App() {
  document.title = 'Clone/Childeren Example'
  return (
    <div className="App">
      <Row spacing={32}>
        <p>Pizza Margarita</p>
        <p>2</p>
        <p>305</p>
        <p>10:30</p>
        <p>John</p>
      </Row>
    </div>
  );
}

export default App;
