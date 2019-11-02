import React from "react";
import Header from "./components/layout/Header";
import Contacts from "./components/contacts/Contacts";
import { Provider } from "./components/context";
import "./App.css";
import AddContact from "./components/AddContact";
function App() {
  return (
    <Provider>
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <Contacts />
          <AddContact />
        </div>
      </div>
    </Provider>
  );
}

export default App;
