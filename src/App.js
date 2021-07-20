import "./App.css";
import List from "./components/List";
import View from "./components/View";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/movies/list" component={List}></Route>
          <Route path="/movies/:title" component={View}></Route>
          <Route path="/" exact>
            <Redirect to="/movies/list"></Redirect>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
