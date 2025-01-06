import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import MyCustComp from "./assets/propsexample/propsexample3";

// 1. class based component
// 2. functional component
// JSX Javascript XML
// <DIV> JavaScript element in uppercase
// <div> HTML element in lowercase

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyCustComp />
  </StrictMode>
);
