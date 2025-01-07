import { useState } from 'react';

const CharacterCount = () => {
  const [text, setText] = useState(''); // State to store the text input

  // Handle text input change
//   const handleChange = (event) => {
//     setText(event.target.value);
//   };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Enter text here" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />
      <p>Total characters: {text.length}</p>
    </div>
  );
};

export default CharacterCount;
