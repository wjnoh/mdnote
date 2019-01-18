import React, { Component } from "react";
import Navigation from "./components/Navigation";
import SidebarNotes from "./components/SidebarNotes";
import NoteView from "./components/NoteView";

class App extends Component {
  render() {
    return (
      <>
        <Navigation />
        <main className="main">
          <div className="main__container">
            <SidebarNotes />
            <NoteView />
          </div>
        </main>
      </>
    );
  }
}

export default App;
