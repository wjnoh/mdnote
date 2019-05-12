import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware, { END } from "redux-saga";
import editorReducer from "./reducers/editor";
import noteReducer from "./reducers/note";

const reducer = combineReducers({
  editor: editorReducer,
  note: noteReducer
});
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export default function configureStore() {
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  return store;
}
