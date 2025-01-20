import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // let c = 0;

  const handleClick = () => {
    setCount(count + 1);
    console.log("Button clicked: " + count);
  }

  

  return (
   <button onClick={handleClick}>Count {count}</button>
  );
}

export default App;
