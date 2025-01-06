import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import StatesExample from './LEC0601/hookexmp'
//import MyCustComp from './LEC3112/propsexmp3'
//import HookExmp1 from './LEC3112/hookexmp1'
//import Component1 from './LEC2412/component1'
//import HtmlComponents from './LEC2412/htmlcomp'
//import Timetable from './LEC2412/timetable'

// 1. class based implementation
// 2. function based implementation
// 3. jsx javascripl XML
// <DIV> for HTML and <div> for react

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <HtmlComponents /> */}
    {/* <Timetable /> */}
    {/* <HookExmp1/> */}
    {/* <MyCustComp/> */}
    <StatesExample/>
  </StrictMode>,
)
