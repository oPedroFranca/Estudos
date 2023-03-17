import './App.css';
import { useState } from 'react';



function App() {
  const [number, setNumber] = useState(0);

  const handleIncrement = () => {
    setNumber(number + 1);
  };

  const handleDecrement = () => {
    setNumber(number - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>contador: {number}</p>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </header>
    </div>
  );
}

export default App;
