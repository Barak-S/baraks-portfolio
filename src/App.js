import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './NavBar'
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
  const [selectedTheme, setSelectedTheme] = useState(null)
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
      let newMessage = messages.concat([data])
      setMessages(newMessage)
      setData({ message: '' })
      emailjs.send("service_h4ihmok", "template_u7sijvk", templateParams, "user_O7KSyjF3rQEItHM4zGMUl")
      .then((result) => {
        setReply({ message: 'You have sent a message to my email. Please leave your contact information and I will get back to you soon. Thanks!'})
        console.log('email sent success')
      }, (error) => {
        console.log(error.text);
      });
    }
  };
  
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <NavBar selectedTheme={selectedTheme} setSelectedTheme={setSelectedTheme} />
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
                selectedTheme={selectedTheme}
                setSelectedTheme={setSelectedTheme}
                {...routerProps} 
              />)}
            />
            <Redirect to={'/'} />
          </Switch>
          <Footer selectedTheme={selectedTheme} />
        </div>
      </Router>
    </MuiThemeProvider>
  );
}

function Footer({ selectedTheme }) {
  return (
      <div className="div-footer">
          <p className="footer-text" style={{ color: selectedTheme ? selectedTheme : '#6DDBAF' }}>{`© ${new Date().getFullYear()}, Barak Web Development`}</p> 
          <ul className="social-footer">
            <li className="social-button-footer">
              <span><TiSocialLinkedinCircular size={27} color={ selectedTheme ? selectedTheme : '#6DDBAF' } onClick={()=> window.open("https://www.linkedin.com/in/baraksaidoff/", "_blank")}/></span>
            </li>
            <li className="social-button-footer">
              <span><AiFillGithub size={23} color={ selectedTheme ? selectedTheme : '#6DDBAF' } onClick={()=> window.open("https://github.com/Barak-S", "_blank")}/></span>
            </li>
            <li className="social-button-footer">
              <span><AiFillMediumCircle size={23} color={ selectedTheme ? selectedTheme : '#6DDBAF' } onClick={()=> window.open("https://medium.com/@baraksaidoff", "_blank")}/></span>
            </li>
          </ul>
      </div>
  )
}

export default App;




