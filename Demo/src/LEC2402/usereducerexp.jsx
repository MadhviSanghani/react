import { useReducer } from "react";

// ...state = spread operator = for update indivisual element
// if we don't use ...state then it will update wanted element and remove other elements
function Func1(state, action) {
  switch (action.type) {
    case "changeName":
      return { ...state, name: action.value };
    case "changeAge":
      return { ...state, age: action.value };
    default:
      return state;
  }
}

function ReducerExmp() {
  const [{ name, age }, dispatch] = useReducer(Func1, { name: "abc", age: 45 });
  return (  <>
  <input type="text" value={name} onChange={(e) => dispatch({ type: "changeName", value: e.target.value })} />
  <br />
  Name: {name}
  <br />
  <input type="number" value={age} onChange={(e) => dispatch({ type: "changeAge", value: parseInt(e.target.value) })} />
  <br />
  Age: {age}
  </>
  );
}

export default ReducerExmp;