import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';

import './App.scss';

const StationeriesPage = props => (
  <div>
    {console.log(props)}
    <h1>Stationeries Page</h1>
    {/* <Link to="/">Home</Link> */}
    <button onClick={() => props.history.push('/')}>Topics</button>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/stationeries" component={StationeriesPage} />
      </Switch>
    </div>
  );
}

export default App;
