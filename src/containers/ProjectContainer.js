import React, { useEffect, useState } from 'react'
import { Carousel, Image } from 'react-bootstrap';
import { projects } from '../projects'
import { Typography, Grid, Tabs, Tab, Hidden, Button, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import TabPanel from '../components/TabPanel';
import ContainedButton from '../components/ContainedButton';
import { useHistory } from 'react-router-dom';
import * as BsIcons from 'react-icons/bs';


const ProjectContainer = ({ selectedTheme, setSelectedTheme }) => {
    const classes = useStyles();
    const history = useHistory();
    const [activeTab, setActiveTab] = useState(0)
    // const [selectedTheme, setSelectedTheme] = useState(null)

    const projectTabs = [
        {
          index: 0,
          label: 'Real Estate Portal',
          link: '/Real-Estate-Portal',
          project: projects[0]
        },
        {
          index: 1,
          label: "What We Watchin'",
          link: '/What-We-Watchin',
          project: projects[1]
        },
        {
          index: 2,
          label: 'Ideasicle X',
          link: '/Ideasicle-X',
          project: projects[2]
        },
        {
          index: 3,
          label: 'Glory Kickboxing',
          link: '/glory-smacks',
          project: projects[3]
        },
    ];

    useEffect(()=>window.scrollTo({ top: 0, behavior: 'smooth' }),[])

    return (
        <div style={styles.container}>
            <Container>
                <Hidden mdUp>
                    <div style={{ paddingTop: 84 }}>
                        <Button
                            style={styles.homeBtn, { color: selectedTheme ? selectedTheme : undefined, border: selectedTheme ? `1px solid ${selectedTheme}` : undefined, transform: 'rotate(180deg)', borderRadius: 24 }}
                            type='submit'
                            endIcon={<BsIcons.BsArrowRight/>}
                            onClick={()=>history.push('/')}
                            >
                            <span style={styles.backBtnLabel}>{'Back'}</span>
                        </Button>

                    </div>
                </Hidden>
                <Tabs
                    className={classes.projectTabs}
                    classes={{ root: classes.root }}
                    value={activeTab || 0}
                    indicatorColor="secondary"
                    // textColor="secondary"
                    onChange={(_e, val) => setActiveTab(val)}
                    >
                    {projectTabs.map((tab,i)=>{
                        return(
                        <Tab 
                            key={tab.index} 
                            className={classes.accountTab} 
                            label={tab.label} 
                            component={NavLink} 
                            to={`/projects${tab.link}`} 
                            isActive={(match, location) => {
                                if (match) {
                                    setSelectedTheme(projects[i].colorTheme)
                                    setActiveTab(tab.index);
                                    return true;
                                } else {
                                    return false;
                                }
                            }}
                        />
                        )
                    })}
                </Tabs>
                {projectTabs.map((projectTab, i)=>{
                    // projects[i].colorTheme && setSelectedTheme(projects[i].colorTheme)
                    return(
                        <TabPanel value={activeTab} index={i}>
                            <div className={classes.projectPanel}>
                                <Grid item lg={9} md={9} sm={12} xs={12}>
                                    <Typography className={classes.typography} style={{ fontSize: 32, fontWeight: 600, paddingTop: 26, paddingBottom: 45, color: `${projects[i].colorTheme}` }}>{projects[i].title}</Typography>
                                    <div className={classes.carousel} style={{ width: '100%', height: 485 }}>
                                        <Carousel interval={9500} style={{ height: '100%' }}>
                                            {projects[i].details.map(img=>{
                                                return(
                                                    <Carousel.Item  className={classes.carousel} style={{ width: '100%', height: '100%' }}>
                                                        <Image
                                                            src={require(`../${img.img}`)}
                                                            alt={projects[i].title}
                                                            thumbnail 
                                                            className={classes.imgThumbnail}
                                                            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                                        />
                                                    </Carousel.Item>
                                                )
                                            })}
                                        </Carousel>
                                    </div>
                                </Grid>
                                <Grid item lg={3} md={3} sm={12} xs={12}>
                                    <div className={classes.descSection}>
                                        <Typography className={classes.typography} style={{ fontWeight: "600", fontSize: 19, color: '#fff' }}>{projects[i].description[0].intro}</Typography>
                                        <Typography className={classes.typography} style={{ color: '#fff', paddingTop: 22, fontSize: 21 }}><strong style={{ color: `${projects[i].colorTheme}`, fontWeight: "600" }}>Technologies: </strong>{projects[i].technologies}</Typography>
                                        {/* <Typography className={classes.typography} style={{ fontWeight: "600", fontSize: 19, color: '#fff', paddingTop: 26}}>{projects[i].description[0].use}</Typography>
                                        { projects[i].description[0].show && <Typography className={classes.typography} style={{ fontWeight: "600", color: '#fff', fontWeight: "600", fontSize: 19, }}>{projects[i].description[0].show}</Typography>}
                                        { projects[i].note && <Typography className={classes.typography} style={{ fontWeight: "600", color: '#fff', fontWeight: "600", fontSize: 19, }}>{projects[i].note}</Typography>} */}
                                        <div style={{ textAlign: "center", marginTop: 32 }}>
                                            { projects[i].live && <ContainedButton style={{ border: `1px solid ${projects[i].colorTheme}`, color: `${projects[i].colorTheme}` }} onClick={()=> window.open(`${projects[i].live}`, "_blank")}>Live</ContainedButton>}
                                            { projects[i].code &&  <button className="view-code" onClick={()=> window.open(`${projects[i].code}`, "_blank")}>View Code <img src="https://i.ya-webdesign.com/images/github-icon-png-7.png" alt="Barak Saidoff Github" style={{ height: 25 }} /></button>}
                                        </div> 
                                    </div>
                                </Grid>
                            </div>
                        <hr style={{ backgroundColor: `${projects[i].colorTheme}` }} />
                        </TabPanel>
                    )
                })}
            </Container>
        </div>
    );
};

const styles = {
    container:{
        minHeight: 'calc(100vh - 94px)',
    },
    homeBtn:{
        // outline: 'none', 
        // position: 'absolute', 
        // left: 17.5,
        // transform: 'rotate(180deg)',
        // height: 40,
        // maxWidth: 99,
        // borderRadius: 50,
    },
    backBtnLabel:{
        transform: 'rotate(180deg)',
    }
};

const useStyles = makeStyles((theme) => ({
      projectTabs:{
        paddingTop: 150,
        [theme.breakpoints.down('sm')]:{
            paddingTop: 56,
        },
      },
      projectPanel:{
        display: 'flex',
        paddingBottom: 36,
        [theme.breakpoints.down('sm')]:{
            flexDirection: 'column',
        }
      },
      descSection:{
        paddingTop: 115,
        paddingLeft: 15,
        [theme.breakpoints.down('sm')]:{
            paddingTop: 26,
            paddingLeft: 0,
        }
      },
      typography:{
        fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      },
      root: {
        '& .MuiTabs-flexContainer': {
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            [theme.breakpoints.down('sm')]:{
                flexDirection: 'column'
            }
        },
        '& .MuiTab-root': {
            padding: 0,
            color: '#6CDAAF',
            fontWeight: 400,
            fontSize: 17.5,
            textDecoration: 'none',
            fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
            [theme.breakpoints.down('sm')]:{
                width: '33%',
                fontSize: 14,
            }
                
        },
     },
     carousel:{
        maxHeight: 550,
        [theme.breakpoints.down('sm')]:{
            maxHeight: 350,
        }
     },
     imgThumbnail:{
        margin: 0,
        padding: 0,
        borderRadius: 0,
        border: 'none',
        height: '100%',
        [theme.breakpoints.down('sm')]:{
            height: 265,
        }
     }
}));


export default ProjectContainer;