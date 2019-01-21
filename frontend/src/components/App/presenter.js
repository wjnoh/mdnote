import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Navigation from "../Navigation";
import SidebarNotes from "../SidebarNotes";
import NoteView from "../NoteView";
import Editor from "../Editor";
import Auth from "../Auth";

class App extends Component {
  render() {
    const { isSidebarOn, handleSidebarOn, handleSidebarOff } = this.props;
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
                render={({ match }) => <NoteView match={match} isMain={true} />}
              />
              <Route path="/note/write" render={() => <Editor />} />
              <Route
                path="/note/:noteId"
                render={({ match }) => <NoteView match={match} />}
              />
              <Route path="/auth" render={() => <Auth />} />
            </Switch>
          </div>
        </main>
      </>
    );
  }
}

export default App;
