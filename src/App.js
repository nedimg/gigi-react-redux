import React from "react";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import Header from "./components/Header";
import Page from "./components/Page";
import Counter from "./components/Counter";
import reducer from "./redux/reducer";

import "./App.css";
import { loadUser } from "./redux/actions";
import CounterControls from "./components/CounterControls";

const store = createStore(reducer, applyMiddleware(thunk, logger));

store.dispatch(loadUser());

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Page />
        <div style={{ position: "fixed", bottom: 10, right: 10 }}>
          {/* please do not inline style */}
          <CounterControls />
          <Counter />
        </div>
      </Provider>
    </div>
  );
}

export default App;
