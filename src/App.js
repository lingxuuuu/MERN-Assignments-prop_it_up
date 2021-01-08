import logo from "./logo.svg";
import "./App.css";
import React from "react";
import PersonalCard from "./components/PersonalCard";

function App() {
  return (
    <div className="App">
      <PersonalCard firstName="Doe" lastName="Jane" age={45} color="Black" />
      <PersonalCard firstName="Smith" lastName="John" age={88} color="Brown" />
      <PersonalCard firstName="Fill" lastName="Millard" age={50} color="Brown"/>
      <PersonalCard firstName="Smith" lastName="Maria" age={62} color="Brown" />
    </div>
  );
}

export default App;
