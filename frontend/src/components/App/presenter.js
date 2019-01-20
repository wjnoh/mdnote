import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Navigation from "../Navigation";
import SidebarNotes from "../SidebarNotes";
import NoteView from "../NoteView";
import Editor from "../Editor";

class App extends Component {
  render() {
    const {
      isSidebarOn,
      handleSidebarOn,
      handleSidebarOff,
      notes,
      loaded
    } = this.props;
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
            <Route path="/note/write" render={() => <Editor />} />

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
              {loaded
                ? notes.map(note => {
                    return (
                      <Route
                        key={note.id}
                        path={`/note/${note.id}`}
                        render={() => (
                          <NoteView
                            note={{
                              title: note.title,
                              content: note.content,
                              created_at: note.created_at
                            }}
                          />
                        )}
                      />
                    );
                  })
                : ""}
            </Switch>
          </div>
        </main>
      </>
    );
  }
}

export default App;
