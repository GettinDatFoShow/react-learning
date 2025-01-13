import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const withMousePosition = (WrappedComponent) => {
  return (props) => {
    const [mousePosition, setMousePosition] = useState({
      x: 0, 
      y: 0,
    })
    useEffect(() =>{
      const handleMousePositionChange = (e) => {
        setMousePosition({
          x: e.clientX, 
          y: e.clientY
        });
      };
      window.addEventListener("mousemove", handleMousePositionChange);
      return () => {
        window.removeEventListener("mousemove", handleMousePositionChange);
      };
    }, []);

    return (
      <WrappedComponent {...props} mousePosition={mousePosition} />
    );
  }
}

const PanelMouseLogger = ({ mousePosition }) => {
  if(!mousePosition) {
    return null;
  }
  return (
    <div className="BasicTracker">
      <p>Mouse Position: </p>
      <div className="Row">
        <span>X: {mousePosition.x} </span>
        <span>Y: {mousePosition.y} </span>
      </div>
    </div>
  )
}

const PointMouseLogger = ({ mousePosition }) => {
  if(!mousePosition) {
    return null;
  }
  return (
    <p>
      ({mousePosition.x}), ({mousePosition.y})
    </p>
  )
}

const PanelMouseTracker = withMousePosition(PanelMouseLogger);
const PointMouseTracker = withMousePosition(PointMouseLogger)

function App() {
  document.title = 'HOC Cursor Tracker';
  return (
    <div className="App">
      <header className="App-header">
        <h1>Little Lemon Restaurant</h1>
        <PanelMouseTracker />
        <PointMouseTracker />
      </header>
    </div>
  );
}

export default App;
