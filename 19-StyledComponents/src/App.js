import './App.css';
import { useState } from 'react';
import { Button } from './components/ButtonStyle';


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
        <Button onClick={handleIncrement}>+</Button>
        <Button onClick={handleDecrement}>-</Button>
      </header>
    </div>
  );
}

export default App;
