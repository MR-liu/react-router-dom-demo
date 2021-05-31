import logo from './logo.svg';
import './App.css';
import Component1 from './page/component1';
import Component2 from './page/component2';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
      <ul>
        <li>
          <Link to="/component1/and">component1</Link>
        </li>
        <li>
          <Link to={{pathname: "/component2", state: {name: 'component2name'}}}>component2</Link>
        </li>
      </ul>
      <Switch>
        <Route path='/component1/:name?/:type?' component={Component1} />
        <Route path='/component2' component={Component2} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
