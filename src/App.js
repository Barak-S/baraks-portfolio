import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Contact from './Contact';
import SocialHandles from './SocialHandles';
import Footer from './Footer';
import Projects from './Home';
import Blog from './Blog';

function App() {
  return (
      <div className="App">
          <SocialHandles/>
          <Contact/>
          <Projects/>
          <Blog/>
          <Footer/>
      </div>
  );
}

export default App;
