import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Details from './Components/Details/Details';
import Header from './Components/Header/Header';

function App() {
  return (
    <Router>
      {/* Header here... */}
      <Header />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/details/:names">
          <Details />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route path="*">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
