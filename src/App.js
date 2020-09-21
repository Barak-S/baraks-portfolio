import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Contact from './Contact'
import ProjectCarousel from './Home'
import MyBlog from './Blog'
import SocialHandles from './SocialHandles'
import Footer from './Footer'



function App() {
  return (
    // <Router>
      <div className="App">
          <SocialHandles/>
          {/* <Switch>
            <Route exact path= "/" render={(routerProps) => <Contact {...routerProps} />}/>
            <Route exact path= "/blog" render={(routerProps) => <MyBlog {...routerProps} />}/>
            <Route exact path= "/projects" render={(routerProps) => <ProjectCarousel {...routerProps} />}/>
          </Switch> */}
          <Contact/>
          <Footer/>
      </div>
    // </Router>

  );
}

export default App;
