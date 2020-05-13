import React from "react";
import Counter from "./components/Counter";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

import { Provider } from "react-redux";

import "./App.css";

const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  console.log("Reducer", state, action);
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        count: state.count - 1,
      };
    case "RESET":
      return {
        count: 0,
      };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
