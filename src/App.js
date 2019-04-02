import React, { Component } from "react";
import Feed from "./components/feed";
import NavBar from "./components/navbar";

class App extends Component {
  render() {
    return (
      <div className="row">
        <NavBar />
        <main className="content col">
          <Feed />
        </main>
      </div>
    );
  }
}

export default App;
