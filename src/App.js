import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { Header, Footer } from "./components/layout";
import Exercises from "./components/Exercises";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <Header />
      <Exercises />
      <Footer />
    </Provider>
  );
}

export default App;
