import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";

import "./style.css";
import createStore from "./store";
import App from "./app";

const store = createStore();

function render() {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContainer>,
    document.getElementById("root")
  );
}

render(App);

if (module.hot) {
  module.hot.accept("./app", () => { render(); });
}
