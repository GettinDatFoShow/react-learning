import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";

const MousePosition = ({ render }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMousePositionChange = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMousePositionChange);

    return () => {
      window.removeEventListener("mousemove", handleMousePositionChange);
    };
  }, []);

  return render({mousePosition});
};

// This component should not receive any props
const PanelMouseLogger = () => {
  // The below if statement can be removed after the render props pattern is implemented
  if (!mousePosition) {
    return null;
  }
  return (
    <div className="BasicTracker">
      <p>Mouse position:</p>
      <MousePosition
        render={({ mousePosition }) => (
          <div className="Row">
            <span>x: {mousePosition.x}</span>
            <span>y: {mousePosition.y}</span>
          </div>
        )}
      />
    </div>
  );
};

// This component should not receive any props
const PointMouseLogger = () => {
  // The below if statement can be removed after the render props pattern is implemented
  if (!mousePosition) {
    return null;
  }
  return (
    <MousePosition
      render={({ mousePosition }) => (
        <p>
          ({mousePosition.x}, {mousePosition.y})
        </p>
      )}
    />
  )
};

function App() {
  document.title = "Render Props Cursor Lab";

  return (
    <div className="App">
      <header className="App-header">
        <h1>Little Lemon Restaurant 🍕</h1>
        <PanelMouseLogger />
        <PointMouseLogger />
      </header>
    </div>
  );
}

export default App;
