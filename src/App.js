import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Contact from './Contact'
import Nav from './Nav'
import Home from './Home'
import About from './About'

function App() {
  return (
    <Router>
      <div className="App">
        <header >
          <Nav></Nav>
        </header>
        <body>
          <Switch>
            <Route exact path= "/" render={(routerProps) => <Contact {...routerProps} />}/>
            <Route exact path= "/contact" render={(routerProps) => <Contact {...routerProps}/>}/>

          </Switch>
        </body>
      
      </div>
    </Router>

  );
}

export default App;
