import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import Component1 from './LEC2412/component1'
import HtmlComponents from './LEC2412/htmlcomp'

// 1. class based implementation
// 2. function based implementation
// 3. jsx javascripl XML
// <DIV> for HTML and <div> for react

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HtmlComponents />
  </StrictMode>,
)
