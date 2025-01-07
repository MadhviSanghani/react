import { useState } from 'react';

const ToggleTextVisibility = () => {
  const [text, setText] = useState(''); // State to store user input
  const [isVisible, setIsVisible] = useState(false); // State to toggle visibility

  // Handle text change
  const handleChange = (event) => {
    setText(event.target.value);
  };

  // Toggle visibility
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Enter your text" 
        value={text} 
        onChange={handleChange} 
      />
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide Text' : 'Show Text'}
      </button>
      {isVisible && <p>{text}</p>}
    </div>
  );
};

export default ToggleTextVisibility;
