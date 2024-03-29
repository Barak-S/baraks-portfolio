import React, { useState, useEffect } from 'react';
import ContainedButton from './components/ContainedButton';
import { useHistory, useLocation } from 'react-router-dom';
import { Button, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as BsIcons from 'react-icons/bs';
import { AiFillGithub } from "react-icons/ai"
import UpworkLogo from './images/upwork-logo.png'
import LinkedInLogo from './images/LinkedIn-logo.png'
import MediumLogo from './images/medium-logo.png'

const NavBar = ({ selectedTheme, setSelectedTheme }) => {
	const history = useHistory();
	const location = useLocation();
	const classes = useStyles();
	const [show, handleShow] = useState(false);
	const [activeButton, setActiveButton] = useState(null)

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 1) {
				handleShow(true)
			} else {
				handleShow(false)
			}
		})
		return () => {
			window.removeEventListener('scroll')
		}
	}, [])

	useEffect(() => {
		setActiveButton(location.pathname)
		if (location.pathname === '/') {
			setSelectedTheme(null)
		}
	}, [location])

	const styles = {
		homeBtn: {
			outline: 'none',
			position: 'absolute',
			left: 17.5,
			transform: 'rotate(180deg)',
			height: 40,
			maxWidth: 99,
			borderRadius: 50,
		},
		projectBtn: {
			outline: 'none',
			position: 'absolute',
			right: 17.5,
		},
		backBtnLabel: {
			transform: 'rotate(180deg)',
		}
	};

	return (
		<div className={`nav ${show && "nav-black"}`}>
			<Hidden smDown>
				{activeButton && activeButton.includes('/projects') &&
					<Button
						style={{
							backgroundColor: '#131313',
							color: selectedTheme,
							transform: 'rotate(180deg)',
							outline: 'none',
							border: 'none',
							position: 'absolute',
							left: 17.5,
							transform: 'rotate(180deg)',
							height: 40,
							maxWidth: 99,
							borderRadius: 24,
						}}
						variant='outlined'
						color='primary'
						type='submit'
						className={classes.backBtn}
						endIcon={<BsIcons.BsArrowRight />}
						onClick={() => history.push('/')}
					>
						<span style={styles.backBtnLabel}>{'Back'}</span>
					</Button>
				}
			</Hidden>
			<ul id="horizontal-list" className={`${show && "mobile-scroll-nav"}`}>
				<li>
					<img 
						src={LinkedInLogo}
						alt="Barak - LinkedIn"
						className="buttonIcon"
						style={{ height: show ? 44 : 61, padding: 10 }}
						onClick={() => window.open("https://www.linkedin.com/in/baraksaidoff/", "_blank")}
					/>
				</li>
				<li>
				<AiFillGithub
					className="buttonIcon github"
					size={show ? 44 : 62} color={'#C3C5C6' }
					onClick={()=> window.open("https://github.com/Barak-S", "_blank")}
				/>
				</li>
				<li>
					<img
						src={UpworkLogo}
						alt="Barak - Upwork"
						className="buttonIcon"
						style={{ height: show ? 44 : 61, padding: 10 }}
						onClick={() => window.open("https://www.upwork.com/freelancers/~018ba5c1b1004e41ea", "_blank")}
					/>
				</li>
				<li>
					<img
						src={MediumLogo}
						alt="Barak - Medium"
						className="buttonIcon"
						style={{ height: show ? 46 : 63, padding: 10 }}
						onClick={() => window.open("https://medium.com/@baraksaidoff", "_blank")}
					/>
				</li>
			</ul>
			<Hidden smDown>
				{activeButton === '/' && (
					<ContainedButton
						variant="contained"
						color="primary"
						style={styles.projectBtn}
						onClick={() => history.push('projects/watery')}
						className={classes.commonBtn}
					>
						{'My Projects'}
					</ContainedButton>
				)}
			</Hidden>
		</div>
	)
}

const useStyles = makeStyles((theme) => ({
	commonBtn: {
		fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
		maxWidth: 165,
		padding: '8px 0',
		width: '100%',
		position: 'relative',
		borderRadius: 24,
		border: '1.5px solid #fff',
		backgroundColor: '#131313',
		color: '#fff',
		'& .MuiButton-label': {
			marginRight: -10,
			transition: '0.3s ease-in-out all',
			color: '#fff',
		},
		'&:hover': {
			border: '1.5px solid #fff',
			backgroundColor: '#131313',
			color: "#fff",
			"& > *:first-child": {
				transform: 'translateX(-10px)',
				opacity: 1,
			},
			'& [class*="-endIcon"]': {
				opacity: 1,
				color: '#35c958',
			},
		},
		[theme.breakpoints.down('sm')]: {
			marginBottom: 27,
		},
		'& [class*="-endIcon"]': {
			opacity: 1,
			color: '#fff',
			transition: '0.5s ease-out all',
		},
	},
	backBtn: {
		fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
		maxWidth: 165,
		padding: '8px 0',
		width: '100%',
		position: 'relative',
		borderRadius: 24,
		'& .MuiButton-label': {
			marginRight: -24,
			transition: '0.3s ease-in-out all',
		},
		'&:hover': {
			backgroundColor: '#131313',
			color: "#fff",
			"& > *:first-child": {
				transform: 'translateX(-10px)',
				opacity: 1,
			},
			'& [class*="-endIcon"]': {
				opacity: 1,
				color: '#fff',
			},
		},
		[theme.breakpoints.down('sm')]: {
			marginBottom: 27,
		},
		'& [class*="-endIcon"]': {
			opacity: 1,
			color: '#fff',
			transition: '0.5s ease-out all',
		},
	},
}));

export default NavBar
