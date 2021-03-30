import React, { useRef, useState, useEffect } from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './NavBar'
import Contact from './Contact'
import Cards from './Cards'
import Video from './images/city-scene.mp4'
 
function App() {


  return (
      <div className="App">
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
    <Col className="align-auto" xs={12} sm={12} md={10} lg={9}>
      <div className="about-section">
        <p style={{ maxWidth: 320}}><strong style={{fontSize: 17, fontWeight: "700"}}>Military Leadership <span style={{ color: "#6DDBAF"}}>|</span> Former Sergeant in the IDF <span style={{ color: "#6DDBAF"}}>|</span></strong> Achieved award of excellence upon advanced training graduation. </p>
        <p style={{ maxWidth: 320}}><strong style={{fontSize: 17, fontWeight: "700"}}>Background in Sales and Financial Services <span style={{ color: "#6DDBAF"}}>|</span></strong> Partnered with S2 Filings sales team and brought in leads that accounted for generating over $1 million in annual sales.</p>
        <p style={{ maxWidth: 320}}><strong style={{fontSize: 17, fontWeight: "700"}}>Experienced in fast-paces development environments <span style={{ color: "#6DDBAF"}}>|</span></strong> Partnered with S2 Filings sales team and brought in leads that accounted for generating over $1 million in annual sales.</p>
      </div>

      <div className="blog-highlight" onClick={()=> window.open( `${articleLink}`, "_blank")}>   
      <hr/>    
          <Row style={{ textAlign: "left", marginBottom: 5}}>
              <Col xs={3} sm={3} md={2} lg={2} >
                  <Image style={{ height: 125, width: 125, objectFit: "cover" }} src={thumbnail} thumbnail alt="Barak Saidoff Blog Thumbnail"/>
              </Col>
              <Col xs={9} sm={9} md={8} lg={8}>
                  <h5 style={{ fontWeight: "600"}}>Latest Blog Post: </h5> 
                  <h4>{getDateString(publishDate)}</h4>
                  <h4 style={{fontWeight: 600, color: "#6DDBAF"}}>{blogTitle}</h4>
              </Col>
          </Row>                     
          <p id='blogIntro' style={{ textAlign: "left"}}>{previewBlogContent(latestBlog)}</p>
      </div>
    </Col>
  )
}


function Footer() {
  return (
      <div className="div-footer">
          <p className="footer-text">{`© ${new Date().getFullYear()}, Barak Web Development`}</p> 
      </div>
  )
}

export default App;




