import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Contact from './Contact'
import Nav from './Nav'
import Home from './Home'


function App() {
  return (
    <Router>
      <div className="App">
          <Nav></Nav>
          <Switch>
            <Route exact path= "/" render={(routerProps) => <Contact {...routerProps} />}/>
          </Switch>
      </div>
    </Router>

  );
}

export default App;
