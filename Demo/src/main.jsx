import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Carousal from './LEC2001/imageChanger'
// import CancelRequest from './LEC2101/cleanup'
import CustomComp from './LEC2101/compo1'
// import StringList from './LEC0801/StringArray'
// import CountdownTimer from './LEC0801/timer'
// import ApiSimulation from './LEC0801/hookuseeffect'


// 1. class based implementation
// 2. function based implementation
// 3. jsx javascripl XML
// <DIV> for HTML and <div> for react

// const array = ["madhvi","priyal","shruti"]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ApiSimulation /> */}

    {/* <CountdownTimer/> */}

    {/* <StringList items={array} /> */}

    {/* <Carousal /> */}

    {/* <CancelRequest/> */}

    <CustomComp/>

  </StrictMode>,
)
