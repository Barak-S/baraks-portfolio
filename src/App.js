import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Contact from './Contact';
import SocialHandles from './SocialHandles';
import Footer from './Footer';
import Blog from './Blog';
import Beclipse from './images/big-eclipse.svg'
import Meclipse from './images/mid-eclipse.svg'
import Cards from './Cards'
import Video from './images/video.mp4'


function App() {

  return (
      <div className="App">
        {/* <img class="big-circle" src={Beclipse} alt="" />
        <img class="medium-circle" src={Meclipse} alt="" />
        <img class="small-circle" src={Meclipse} alt="" /> */}
        <video id="background-video" autoPlay loop muted>
          <source src={Video} type="video/mp4" />
        </video>
        <SocialHandles/>
        <Contact/>
        <Cards/>
        <Blog/>
        <Footer/>
      </div>
  );
}

export default App;
