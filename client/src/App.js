import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Messenger from "./pages/messenger/Messenger";

function App() {
  const { user } = true;
  return (
    <Router>
      <Switch>
        <Route path="/messenger">
          {!user ? <Redirect to="/" /> : <Messenger />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
