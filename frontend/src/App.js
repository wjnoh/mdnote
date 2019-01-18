import React, { Component } from "react";
import Navigation from "./components/Navigation";
import SidebarNotes from "./components/SidebarNotes";
import NoteView from "./components/NoteView";

class App extends Component {
  state = {
    isSidebarOn: false
  };

  handleSidebarOn = () => {
    this.setState({
      isSidebarOn: true
    });
  };

  handleSidebarOff = () => {
    this.setState({
      isSidebarOn: false
    });
  };

  render() {
    const { isSidebarOn } = this.state;
    const { handleSidebarOn, handleSidebarOff } = this;
    return (
      <>
        <Navigation
          isSidebarOn={isSidebarOn}
          handleSidebarOn={handleSidebarOn}
          handleSidebarOff={handleSidebarOff}
        />
        <main className="main">
          <div className="main__container">
            <SidebarNotes isSidebarOn={isSidebarOn} />
            <NoteView />
          </div>
        </main>
      </>
    );
  }
}

export default App;
