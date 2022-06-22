import React from 'react'
import { TiSocialLinkedinCircular } from "react-icons/ti"
import { AiFillMediumCircle, AiFillGithub } from "react-icons/ai"
import { makeStyles } from '@material-ui/core';
import '../App.css'


const Footer = ({ selectedTheme }) => {
	const classes = useStyles()
  return (
      <div className={classes.divFooter}>
          <p className={classes.footerText} style={{ color: selectedTheme ? selectedTheme : '#35c958' }}>{`© ${new Date().getFullYear()}, Barak Web Development`}</p> 
          <ul className="social-footer">
            <li className={classes.socialButtonFooter}>
              <span><TiSocialLinkedinCircular size={27} color={ selectedTheme ? selectedTheme : '#35c958' } onClick={()=> window.open("https://www.linkedin.com/in/baraksaidoff/", "_blank")}/></span>
            </li>
            <li className={classes.socialButtonFooter}>
              <span><AiFillGithub size={23} color={ selectedTheme ? selectedTheme : '#35c958' } onClick={()=> window.open("https://github.com/Barak-S", "_blank")}/></span>
            </li>
            <li className={classes.socialButtonFooter}>
              <span><AiFillMediumCircle size={23} color={ selectedTheme ? selectedTheme : '#35c958' } onClick={()=> window.open("https://medium.com/@baraksaidoff", "_blank")}/></span>
            </li>
          </ul>
      </div>
  )
}

const useStyles = makeStyles((theme) => ({
	divFooter: {
		position: 'relative',
	},
	footerText: {
		textAlign: 'center',
		fontSize: 16,
		fontWeight: 600,
		margin: 0,
		paddingBottom: '0.25rem',
	},
	socialButtonFooter: {
		listStyle: 'none',
		padding: '0px 8px',
		cursor: 'pointer',
	}
}))

export default Footer