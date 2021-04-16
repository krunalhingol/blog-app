import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";
import { createStore, compose, applyMiddleware } from "redux";
import { routerMiddleware } from "connected-react-router";
import createRootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

export const history = createBrowserHistory({ basename: "/" });
export const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({ name: "blog-app" });
const reducer = createRootReducer(history);

const enhancedCompose =
  process.env.NODE_ENV === "development" ? composeEnhancers : compose;

export const middleware = enhancedCompose(
  applyMiddleware(sagaMiddleware, routerMiddleware(history)),
);

export const store = createStore(reducer, middleware);
