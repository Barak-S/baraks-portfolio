import React, { useState, useEffect } from 'react';
import ContainedButton from './components/ContainedButton';
import { useHistory, useLocation } from 'react-router-dom';
import { Button, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as BsIcons from 'react-icons/bs';

const NavBar = () =>{
    const history = useHistory();
    const location= useLocation();
    const classes = useStyles();
    const [show, handleShow] = useState(false);
    const [activeButton, setActiveButton] = useState(null)
  
    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if (window.scrollY > 1){
                handleShow(true)
            } else {
                handleShow(false)
            }
        })
        return ()=>{
            window.removeEventListener('scroll')
        }
    }, [])

    useEffect(()=>{
        setActiveButton(location.pathname)
    },[location])

    const styles = {
        homeBtn:{
            outline: 'none', 
            position: 'absolute', 
            left: 17.5,
            transform: 'rotate(180deg)',
            height: 40,
            maxWidth: 99,
            borderRadius: 50,
        },
        projectBtn:{
            outline: 'none', 
            position: 'absolute', 
            right: 17.5
        },
        backBtnLabel:{
            transform: 'rotate(180deg)',
        }
    };
  
    return (
        <div className={`nav ${show && "nav-black"}`}>
            <Hidden smDown>
                { activeButton && activeButton.includes('/projects') &&
                    <Button
                        style={styles.homeBtn}
                        variant='outlined'
                        color='primary'
                        type='submit'
                        className={classes.commonBtn}
                        endIcon={<BsIcons.BsArrowRight/>}
                        onClick={()=>history.push('/')}
                        >
                        <span style={styles.backBtnLabel}>{'Back'}</span>
                    </Button>
                }
            </Hidden>
            <ul id="horizontal-list">
                <li>
                    <img src="https://www.sharethis.com/wp-content/uploads/2017/05/LinkedIn.png" alt="Barak Saidoff LinkedIn" className="buttonIcon" style={{height: 63, padding:10,}} onClick={()=> window.open("https://www.linkedin.com/in/baraksaidoff/", "_blank")}></img>
                </li>
                <li>
                    <img src="https://i.ya-webdesign.com/images/github-icon-png-7.png" alt="Barak Saidoff Github" className="buttonIcon github" style={{height: 63, padding:10}} onClick={()=> window.open("https://github.com/Barak-S", "_blank")}></img>
                </li>
                <li>
                    <img src="https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Medium-512.png" alt="Barak Saidoff Medium Blog" className="buttonIcon" style={{height: 63, padding:10}} onClick={()=> window.open("https://medium.com/@baraksaidoff", "_blank")}></img>
                </li>
            </ul>
            <Hidden smDown>
                { activeButton === '/' &&
                    <ContainedButton variant="contained" color="primary" style={styles.projectBtn} onClick={()=>history.push('projects')}>
                    {'My Projects'}
                    </ContainedButton>
                }
            </Hidden>
        </div>
    )
  }

  const useStyles = makeStyles((theme) => ({
    commonBtn:{
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
        '&:hover':{ 
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
            opacity: 0,
            color: '#309AD5',
            transition: '0.5s ease-out all',
        },
    },
  }));

  export default NavBar
