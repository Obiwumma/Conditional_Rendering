import React from "react";
import Login from "./Login";

const currentTime = new Date().getHours();

let isLoggedIn = true;

function App() {
  return (
    <div className="container">
      {isLoggedIn ? <h1>Hello</h1> : <Login></Login>}
      {currentTime > 18 && <h1>why are you still working?</h1>}
    </div>
  );
}

export default App;
