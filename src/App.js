import { ConnectedRouter } from "connected-react-router";
import Routes from "./Routes";
import "./App.scss";

function App({ history }) {
  return (
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  );
}

export default App;
