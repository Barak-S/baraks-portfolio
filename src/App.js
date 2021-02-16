import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Contact from './Contact';
import SocialHandles from './SocialHandles';
import Footer from './Footer';
import Blog from './Blog';
import Cards from './Cards'
import Video from './images/video.mp4'


function App() {

  const videoRef= useRef();

  const setPlayBack = () => {
    videoRef.current.playbackRate = 0.75;
  };

  return (
      <div className="App">
        <video id="background-video" webkit-playsinline playsinline autoplay="autoplay" muted defaultMuted loop >
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
