import React, { useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  data: {},
  err: "",
};

const reducer = (prevState, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...prevState,
        loading: false,
        data: action.payload,
      };
    case "FETCH_ERROR":
      return {
        ...prevState,
        loading: false,
        err: action.payload,
      };
    default:
      return prevState;
  }
};

const DataFetching = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      console.log(res);
      dispatch({ type: "FETCH_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "FETCH_ERROR", payload: err.message });
    }
  };

  if (state.loading) {
    return <h1>Loading...</h1>;
  }
  if (state.err) {
    return <p>{state.err}</p>;
  }
  return <h2>{state.data.name}</h2>;
};

export default DataFetching;
