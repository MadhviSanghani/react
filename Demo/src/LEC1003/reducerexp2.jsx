import { useEffect, useReducer } from "react";
const initialState = {
  options: [
    { id: 1, name: "car", value: 40 },
    { id: 2, name: "bike", value: 60 },
    { id: 3, name: "plane", value: 80 },
  ],
  selected: 1,
  quantity: 1,
};

function ReduceButtonState(state) {
  return {
    ...state,
    incrementDisabled: state.quantity === 10, //insure highest quantity
    decrementDisabled: state.quantity === 0, //insure lowest quantity
  };
}

function ReduceTotal(state) {
  const option = state.options.find((i) => i.id === state.selected); //will hold id of selected item
  return {
    ...state,
    total: state.quantity * option.value, //to count total
  };
}

function ReducerFunction2(state, action) {
  let newSate;
  switch (action.type) {
    case "init":
      newSate = ReduceButtonState(state);
      return ReduceTotal(newSate);
    case "incrementQuantity":
      newSate = { ...state, quantity: state.quantity + 1 };
      newSate = ReduceButtonState(newSate);
      return ReduceTotal(newSate);
    case "decrementQuantity":
      newSate = { ...state, quantity: state.quantity - 1 };
      newSate = ReduceButtonState(newSate);
      return ReduceTotal(newSate);
    case "selectItem":
      newSate = { ...state, selected: Number(action.id) };
      return ReduceTotal(newSate); //to update total when item is selected.  //It's not necessary for this case. But it can be useful for more complex cases.  //Remember to add error handling for invalid id.  //It's not included here for simplicity.  //You might want to use a library like lodash for such cases.  //If you want to keep your state in a single object, you might need to split this into multiple objects.
    default:
      throw new Error("Unknow action type " + action.type);
  }
}

export default function ReducerDependency() {
  const [
    { options, selected, quantity, incrementDisabled, decrementDisabled, total },
    dispatch,
  ] = useReducer(ReducerFunction2, initialState);

  useEffect (() => {
    dispatch({ type: "init" });
  });

  return (
    <>
      <section>
        <button
          disabled={incrementDisabled}
          onClick={() => dispatch({ type: "incrementQuantity" })}
        >
          +
        </button>
        <input readOnly value={quantity} />
        <button
          disabled={decrementDisabled}
          onClick={() => dispatch({ type: "decrementQuantity" })}
        >
          -
        </button>
      </section>
      <section>
        <select
          value={selected}
          onChange={(e) => dispatch({ type: "selectItem", id: e.target.value })}
        >
          {options.map((i) => (
            <option key={i.id} value={i.id}>
              {" "}
              {i.name} {i.value}
            </option>
          ))}
        </select>
        <br />
        Total Price: $ {total}
      </section>
    </>
  );
}
