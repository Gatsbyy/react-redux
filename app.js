import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
import App from "./view/app";

const initState = {};
const enhancer = applyMiddleware(thunk);
export const store = createStore(reducer, initState, enhancer);

render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('app'));