import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ToggleTextVisibility from './LEC0701/exercise3'


// 1. class based implementation
// 2. function based implementation
// 3. jsx javascripl XML
// <DIV> for HTML and <div> for react

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToggleTextVisibility />
  </StrictMode>,
)
