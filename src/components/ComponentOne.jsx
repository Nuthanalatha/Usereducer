import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 0,
};

const reducer = (prevState, action) => {
  console.log(prevState);
  console.log(action);
  switch (action.type) {
    case "increment":
      return {
        ...prevState,
        firstCounter: prevState.firstCounter + action.payload,
      };
    case "decrement":
      return {
        ...prevState,
        firstCounter: prevState.firstCounter - action.payload,
      };
    case "reset":
      return {
        ...prevState,
        firstCounter: initialState.firstCounter,
      };
    case "increment1":
      return {
        ...prevState,
        secondCounter: prevState.secondCounter + action.payload,
      };
    case "decrement1":
      return {
        ...prevState,
        secondCounter: prevState.secondCounter - action.payload,
      };
    case "reset1":
      return {
        ...prevState,
        secondCounter: initialState.secondCounter,
      };
    default:
      return prevState;
  }
};

const ComponentOne = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div>
        <h1>First Count-{state.firstCounter}</h1>
        <button
          onClick={() => {
            dispatch({ type: "increment", payload: 5 });
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch({ type: "decrement", payload: 5 });
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            dispatch({ type: "reset" });
          }}
        >
          Reset
        </button>
      </div>
      <div>
        <h1>Second Count-{state.secondCounter}</h1>
        <button
          onClick={() => {
            dispatch({ type: "increment1", payload: 5 });
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch({ type: "decrement1", payload: 5 });
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            dispatch({ type: "reset1" });
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default ComponentOne;
