import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './Nav'
import Contact from './Contact'
import ProjectCarousel from './Home'
import MyBlog from './Blog'


function App() {
  return (
    <Router>
      <div className="App">
          <Nav></Nav>
          <Switch>
            <Route exact path= "/" render={(routerProps) => <Contact {...routerProps} />}/>
            <Route exact path= "/blog" render={(routerProps) => <MyBlog {...routerProps} />}/>
            <Route exact path= "/projects" render={(routerProps) => <ProjectCarousel {...routerProps} />}/>
          </Switch>
      </div>
    </Router>

  );
}

export default App;
