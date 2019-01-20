import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation";
import SidebarNotes from "./components/SidebarNotes";
import NoteView from "./components/NoteView";
import Editor from "./components/Editor";

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
            <SidebarNotes
              isSidebarOn={isSidebarOn}
              handleSidebarOff={handleSidebarOff}
            />
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <NoteView
                    note={{
                      title: "Mdnote",
                      content:
                        "마크다운 노트, Mdnote에 방문하신 것을 환영합니다.",
                      created_at: "2019-01-20T13:33:32.797+09:00"
                    }}
                  />
                )}
              />
              <Route path="/note/1" render={() => <NoteView />} />
              <Route path="/note/write" render={() => <Editor />} />
            </Switch>
          </div>
        </main>
      </>
    );
  }
}

export default App;
