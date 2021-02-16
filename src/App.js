import React, { useRef, useEffect } from 'react';
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

  useEffect(()=>{
    const player = videoRef.current.children[0]
    videoRef.current.play()
    player.setAttribute("muted", "")
    player.autoplay = true;
    player.controls = false;
    player.playsinline = true;
    player.muted = true;
  })

  return (
      <div className="App">
        <video ref={videoRef} id="background-video" autoPlay muted playsInline loop >
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
