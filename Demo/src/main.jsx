import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import StringList from './LEC0801/StringArray'
// import CountdownTimer from './LEC0801/timer'
// import ApiSimulation from './LEC0801/hookuseeffect'


// 1. class based implementation
// 2. function based implementation
// 3. jsx javascripl XML
// <DIV> for HTML and <div> for react

const array = ["madhvi","priyal","shruti"]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ApiSimulation /> */}

    {/* <CountdownTimer/> */}

    <StringList items={array} />

  </StrictMode>,
)
