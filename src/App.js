import React, { useRef, useState, useEffect } from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './NavBar'
import Contact from './Contact'
import Cards from './Cards'
import Video from './images/video.mp4'
 
function App() {

  const videoRef= useRef();

  useEffect(()=>{
    const player = videoRef.current.children[0]
    videoRef.current.play()
    videoRef.current.playbackRate = 0.75;
    player.setAttribute("muted", "")
    player.autoplay = true;
    player.controls = false;
    player.playsinline = true;
    player.muted = true;
  })

  return (
      <div className="App" style={{backgroundColor: "#131313"}}>
        <video ref={videoRef} id="background-video" autoPlay muted playsInline loop >
          <source src={Video} type="video/mp4" />
        </video>
        <NavBar/>
        <Contact/>
        <Cards/>
        <Blog/>
        <Footer/>
      </div>
  );
}

function Blog(){

  const [latestBlog, setLatestBlog] = useState('')
  const [blogTitle, setBlogTitle] = useState('')
  const [publishDate, setPublishDate] = useState('')
  const [articleLink, setArticleLink] = useState('')
  const [thumbnail, setThumbnail] = useState('')

  useEffect(()=>{
    fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@baraksaidoff")
    .then(resp=>resp.json())
    .then(blog=>{ 
        setLatestBlog(blog.items[0].content)
        setBlogTitle(blog.items[0].title)
        setPublishDate(blog.items[0].pubDate)
        setArticleLink(blog.items[0].link)
        setThumbnail(blog.items[0].thumbnail)
    })
    .catch(err=>console.log(err))
  })

  function toText(node) {
    let tag = document.createElement('div')
    tag.innerHTML = node
    node = tag.innerText
    return node
  }

  function getDateString(timestamp){
    if (timestamp !== "N/A"){
        var arr = timestamp.split(/[- :]/);
        timestamp = new Date(arr[0], arr[1]-1, arr[2], arr[3], arr[4], arr[5]);
        return timestamp.toDateString()
    }
  }

  function previewBlogContent(content){
    let parsedText = toText(content)
    if (content.length > 449 ){
        return `${parsedText.slice(0,450)} ...`
    } else {
        return `${parsedText.slice(0,450)}`
    }
  }

  return(
    <Col className="align-auto" xs={12} sm={12} md={9} lg={9}>
      <hr/>    
      <div className="blog-highlight" onClick={()=> window.open( `${articleLink}`, "_blank")}>   
          <Row style={{ textAlign: "left", marginBottom: 5}}>
              <Col xs={3} sm={3} md={2} lg={2} >
                  <Image style={{ height: 125, width: 125, objectFit: "cover" }} src={thumbnail} thumbnail alt="Barak Saidoff Blog Thumbnail"/>
              </Col>
              <Col xs={9} sm={9} md={8} lg={8}>
                  <h5 style={{color: "#fff", fontWeight: "600"}}>Latest Blog Post: </h5> 
                  <h4 style={{color: "#fff"}}>{getDateString(publishDate)}</h4>
                  <h4 style={{fontWeight: 600, color: "#0377B5"}}>{blogTitle}</h4>
              </Col>
          </Row>                     
          <p id='blogIntro' style={{color: "#fff", textAlign: "left"}}>{previewBlogContent(latestBlog)}</p>
      </div>
    </Col>
  )
}


function Footer() {
  return (
      <div className="div-footer">
          <p className="footer-text">© 2021, Barak Web Development</p>
          {/* <svg className="wave1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#16307D" fill-opacity="0.4" d="M0,160L80,186.7C160,213,320,267,480,245.3C640,224,800,128,960,96C1120,64,1280,96,1360,112L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg> */}
      </div>
  )
}

export default App;



