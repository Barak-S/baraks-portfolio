import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './NavBar'
import emailjs from 'emailjs-com';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import ProjectContainer from './containers/ProjectContainer';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import { makeStyles } from '@material-ui/core';
import Footer from './components/Footer';


const App = () => {
	const classes = useStyles()

  const [data, setData] = useState({ email: '', message: '' });
  const [reply, setReply] = useState({ message: '' })
  const [messages, setMessages] = useState([]);
  const [selectedTheme, setSelectedTheme] = useState(null)

  const handleTextFieldChanged = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const sendEmail = (e) => {
    if (data.message.length){
      var templateParams = {
        subject: 'This email is from BarakSaidoff.com',
        message: data.message,
      }
      window.scrollTo({ top: 0, behavior: 'smooth' })
      let newMessage = messages.concat([data])
      setMessages(newMessage)
      setData({ message: '' })
      emailjs.send("service_h4ihmok", "template_u7sijvk", templateParams, "user_O7KSyjF3rQEItHM4zGMUl")
      .then((result) => {
        setReply({ message: 'You have sent a message to my email. Please leave your contact information and I will get back to you soon. Thanks!'})
        console.log('email sent success')
      }, (error) => {
        console.log(error.text)
      })
    }
  }

  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <div className={classes.root}>
          <NavBar selectedTheme={selectedTheme} setSelectedTheme={setSelectedTheme} />
          <Switch>
            <Route exact path={'/'} render={(routerProps) =>(
              <HomeContainer
                value={data}
                messages={messages}
                reply={reply}
                handleSubmit={sendEmail}
                handleChange={handleTextFieldChanged}
                {...routerProps}
              />)}
            />
            <Route path={'/projects'} render={(routerProps) => (
              <ProjectContainer
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
  )
}

const useStyles = makeStyles((theme) => ({
	root: {
		minHeight: '100vh',
		fontFamily: `"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`,
		letterSpacing: .35,
		lineHeight: 1.8,
		margin: 0,
		padding: 0,
		boxSizing: 'border-box',
		backgroundColor: '#131313',
	}
}))


export default App;




