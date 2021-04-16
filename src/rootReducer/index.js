import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import { history } from "../reduxStore";
import common from "./common";
import blogs from "./blogs";

const rootReducer = () =>
  combineReducers({
    router: connectRouter(history),
    common,
    blogs,
  });

export default rootReducer;
