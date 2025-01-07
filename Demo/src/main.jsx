import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CharacterCount from './LEC0701/exercise4'


// 1. class based implementation
// 2. function based implementation
// 3. jsx javascripl XML
// <DIV> for HTML and <div> for react

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CharacterCount />
  </StrictMode>,
)
