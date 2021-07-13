import React, { useState, useEffect } from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './NavBar'
// import Contact from './Contact'
// import Portfolio from './Portfolio'
import emailjs from 'emailjs-com';
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { AiFillMediumCircle, AiFillGithub } from "react-icons/ai";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import ProjectContainer from './containers/ProjectContainer';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme';


 
function App() {
  const [data, setData] = useState({ message: '' });
  const [reply, setReply] = useState({ message: '' })
  const [messages, setMessages] = useState([]);
  const { message } = data;

  const handleTextFieldChanged = (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    if (data.message.length){
      var templateParams = {
        subject: 'This email is from BarakSaidoff.com',
        message: data.message,
      };
      window.scrollTo({ top: 0, behavior: 'smooth' })
      emailjs.send("service_h4ihmok", "template_u7sijvk", templateParams, "user_O7KSyjF3rQEItHM4zGMUl")
      .then((result) => {
          let newMessage = messages.concat([data])
          setMessages(newMessage)
          setData({ message: '' })
          if (reply.message === ''){
            setTimeout(()=>setReply({ message: 'You have sent a message to my email. Please leave your contact information and I will get back to you soon.'}), 1400)
          }
      }, (error) => {
          console.log(error.text);
      });
    }
  };

  
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <NavBar/>
          <Switch>
            <Route exact path={'/'} render={(routerProps) =>( 
              <HomeContainer
                value={message}
                messages={messages}
                reply={reply}
                handleSubmit={sendEmail}
                handleChange={handleTextFieldChanged} 
                {...routerProps} 
              />)}
            />
            <Route path={'/projects'} render={(routerProps) => (
              <ProjectContainer value={message}
                handleSubmit={sendEmail}
                handleChange={handleTextFieldChanged} 
                {...routerProps} 
              />)}
            />
            <Redirect to={'/'} />
          </Switch>
          <Footer/>
        </div>
      </Router>
    </MuiThemeProvider>
  );
}

// function Blog(){

//   const [latestBlog, setLatestBlog] = useState('')
//   const [blogTitle, setBlogTitle] = useState('')
//   const [publishDate, setPublishDate] = useState('')
//   const [articleLink, setArticleLink] = useState('')
//   const [thumbnail, setThumbnail] = useState('')

//   useEffect(()=>{
//     fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@baraksaidoff")
//     .then(resp=>resp.json())
//     .then(blog=>{ 
//         setLatestBlog(blog.items[0].content)
//         setBlogTitle(blog.items[0].title)
//         setPublishDate(blog.items[0].pubDate)
//         setArticleLink(blog.items[0].link)
//         setThumbnail(blog.items[0].thumbnail)
//     })
//     .catch(err=>console.log(err))
//   })

//   function toText(node) {
//     let tag = document.createElement('div')
//     tag.innerHTML = node
//     node = tag.innerText
//     return node
//   }

//   function getDateString(timestamp){
//     if (timestamp !== "N/A"){
//         var arr = timestamp.split(/[- :]/);
//         timestamp = new Date(arr[0], arr[1]-1, arr[2], arr[3], arr[4], arr[5]);
//         return timestamp.toDateString()
//     }
//   }

//   function previewBlogContent(content){
//     let parsedText = toText(content)
//     if (content.length > 449 ){
//         return `${parsedText.slice(0,450)} ...`
//     } else {
//         return `${parsedText.slice(0,450)}`
//     }
//   }

//   return(
//     <Col className="align-auto" xs={12} sm={12} md={10} lg={9}>
//       <div className="about-section">
//         <p className='skill-tag'><strong style={{fontSize: 17, fontWeight: "700"}}>Military Leadership <span style={{ color: "#6DDBAF"}}>|</span> Former Sergeant in the IDF <span style={{ color: "#6DDBAF"}}>|</span></strong> Achieved award of excellence upon advanced training graduation. </p>
//         <p className='skill-tag'><strong style={{fontSize: 17, fontWeight: "700"}}>Experienced in Agile Development <span style={{ color: "#6DDBAF"}}>|</span></strong> Hands on experience contributing to startups and existing code-bases through creativity and problem solving</p>
//         <p className='skill-tag'><strong style={{fontSize: 17, fontWeight: "700"}}>Background in Sales and Financial Services <span style={{ color: "#6DDBAF"}}>|</span></strong> Partnered with S2 Filings sales team and brought in leads that accounted for generating over $1 million in annual sales.</p>
//       </div>
//       <div className="blog-highlight" onClick={()=> window.open( `${articleLink}`, "_blank")}>   
//         <Row style={{ textAlign: "left", marginBottom: 5}}>
//             <Col xs={3} sm={3} md={2} lg={2} >
//                 <Image style={{ height: 125, width: 125, objectFit: "cover" }} src={thumbnail} thumbnail alt="Barak Saidoff Blog Thumbnail"/>
//             </Col>
//             <Col xs={9} sm={9} md={8} lg={8}>
//                 <h5 style={{ fontWeight: "600"}}>Latest Blog Post: </h5> 
//                 <h4>{getDateString(publishDate)}</h4>
//                 <h4 style={{fontWeight: 600, color: "#6DDBAF"}}>{blogTitle}</h4>
//             </Col>
//         </Row>                     
//         <p id='blogIntro' style={{ textAlign: "left"}}>{previewBlogContent(latestBlog)}</p>
//       </div>
//     </Col>
//   )
// }


function Footer() {
  return (
      <div className="div-footer">
          <p className="footer-text">{`© ${new Date().getFullYear()}, Barak Web Development`}</p> 
          <ul className="social-footer">
            <li className="social-button-footer">
              <span><TiSocialLinkedinCircular size={27} onClick={()=> window.open("https://www.linkedin.com/in/baraksaidoff/", "_blank")}/></span>
            </li>
            <li className="social-button-footer">
              <span><AiFillGithub size={23} onClick={()=> window.open("https://github.com/Barak-S", "_blank")}/></span>
            </li>
            <li className="social-button-footer">
              <span><AiFillMediumCircle size={23} onClick={()=> window.open("https://medium.com/@baraksaidoff", "_blank")}/></span>
            </li>
          </ul>
      </div>
  )
}

export default App;




