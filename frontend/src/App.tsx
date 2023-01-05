import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

import MyMap from "./components/MyMap";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <MyMap />
    </Provider>
  );
}

export default App;
