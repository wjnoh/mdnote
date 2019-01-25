import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "../Navigation";
import Sidebar from "../Sidebar";
import NoteView from "../NoteView";
import Editor from "../Editor";
import Auth from "../Auth";

import "./styles.scss";

const App = props => {
  const { isSidebarOn, handleSidebarOn, handleSidebarOff } = props;

  return (
    <>
      <Navigation
        isSidebarOn={isSidebarOn}
        handleSidebarOn={handleSidebarOn}
        handleSidebarOff={handleSidebarOff}
      />
      <main className="main">
        <div className="main__container">
          <Sidebar
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
};

export default App;
