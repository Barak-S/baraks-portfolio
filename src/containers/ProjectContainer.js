import React, { useEffect, useState } from 'react'
import { Carousel, Col, Image } from 'react-bootstrap';
import { projects } from '../projects'
import { Typography, Tabs, Tab, Hidden, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import TabPanel from '../components/TabPanel';
import ContainedButton from '../components/ContainedButton';
import { useHistory } from 'react-router-dom';
import * as BsIcons from 'react-icons/bs';


const ProjectContainer = () => {
    const classes = useStyles();
    const history = useHistory();
    const [activeTab, setActiveTab] = useState(0)

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
    ];

    useEffect(()=>window.scrollTo({ top: 0, behavior: 'smooth' }),[])

    useEffect(()=>{
        console.log(activeTab)
    },[activeTab])

    return (
        <div style={styles.container}>
            <Col xs={12} sm={12} md={10} lg={10} style={{ margin: '0 auto' }}>
                <Hidden mdUp>
                    <div style={{ paddingTop: 84 }}>
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

                    </div>
                </Hidden>
                <Tabs
                    className={classes.projectTabs}
                    classes={{ root: classes.root }}
                    value={activeTab || 0}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={(_e, val) => setActiveTab(val)}
                    aria-label="disabled tabs example"
                    >
                    { projectTabs.map((tab)=>{
                        return(
                        <Tab key={tab.index} className={classes.accountTab} label={tab.label} component={NavLink} to={`/projects${tab.link}`} 
                            isActive={(match, location) => {
                                if (match) {
                                    setActiveTab(tab.index);
                                    return true;
                                } else {
                                    return false;
                                }
                            }}
                        />
                        )
                    }) }
                </Tabs>

                <TabPanel value={activeTab} index={0}>
                    <Typography color="primary" style={{ fontSize: 32, fontWeight: 600, paddingTop: 26, paddingBottom: 45 }}>{projects[0].title}</Typography>
                    <div className={classes.carousel} style={{ maxWidth: 700, width: '100%', height: '100%', margin: '0 auto' }}>
                        <Carousel interval={9500}>
                            {projects[0].details.map(img=>{
                                return(
                                    <Carousel.Item  className={classes.carousel} style={{ maxWidth: 700, width: '100%', height: '100%' }}>
                                        <Image
                                            src={require(`../${img.img}`)}
                                            alt={projects[0].title}
                                            thumbnail 
                                            className={classes.imgThumbnail}
                                            style={{ objectFit: 'cover', margin: '0 auto' }}
                                        />
                                    </Carousel.Item>
                                )
                            })}
                        </Carousel>
                    </div>
                    <div style={{ paddingBottom: 36}}>
                        <Typography style={{ fontWeight: "600", fontSize: 19, color: '#fff', paddingTop: 26 }}>{projects[0].description[0].intro}</Typography>
                        <Typography style={{ color: '#fff', paddingTop: 22, fontSize: 21 }}><strong style={{color: '#6DDBAF', fontWeight: "600"}}>Technologies: </strong>{projects[0].technologies}</Typography>
                        <Typography style={{ fontWeight: "600", fontSize: 19, color: '#fff', paddingTop: 26}}>{projects[0].description[0].use}</Typography>
                        { projects[0].description[0].show && <Typography style={{ fontWeight: "600", color: '#fff', fontWeight: "600", fontSize: 19, }}>{projects[0].description[0].show}</Typography>}
                        { projects[0].note && <Typography style={{ fontWeight: "600", color: '#fff', fontWeight: "600", fontSize: 19, }}>{projects[0].note}</Typography>}
                        <div style={{textAlign: "center"}}>
                            {projects[0].live && <ContainedButton onClick={()=> window.open(`${projects[0].live}`, "_blank")}>Live</ContainedButton>}
                            { projects[0].code &&  <button className="view-code" onClick={()=> window.open(`${projects[0].code}`, "_blank")}>View Code <img src="https://i.ya-webdesign.com/images/github-icon-png-7.png" alt="Barak Saidoff Github" style={{height: 25}} /></button>}
                        </div> 
                    </div>
                    <hr/>
                </TabPanel>
                <TabPanel value={activeTab} index={1}>
                    <Typography color="primary" style={{ fontSize: 32, fontWeight: 600, paddingTop: 26, paddingBottom: 45 }}>{projects[1].title}</Typography>
                    <div  className={classes.carousel} style={{ maxWidth: 700, width: '100%', height: '100%', margin: '0 auto' }}>
                        <Carousel interval={9500}>
                            {projects[1].details.map(img=>{
                                return(
                                    <Carousel.Item  className={classes.carousel} style={{ maxWidth: 700, width: '100%', height: '100%' }}>
                                        <Image
                                            src={require(`../${img.img}`)}
                                            alt={projects[1].title}
                                            thumbnail 
                                            className={classes.imgThumbnail}
                                            style={{ objectFit: 'cover', margin: '0 auto' }}
                                        />
                                    </Carousel.Item>
                                )
                            })}
                        </Carousel>
                    </div>
                    <div style={{ paddingBottom: 36}}>
                        <Typography style={{ fontWeight: "600", fontSize: 19, color: '#fff', paddingTop: 26 }}>{projects[1].description[0].intro}</Typography>
                        <Typography style={{ color: '#fff', paddingTop: 22, fontSize: 21 }}><strong style={{color: '#6DDBAF', fontWeight: "600"}}>Technologies: </strong>{projects[1].technologies}</Typography>
                        <Typography style={{ fontWeight: "600", fontSize: 19, color: '#fff', paddingTop: 26}}>{projects[1].description[0].use}</Typography>
                        { projects[1].description[0].show && <Typography style={{ fontWeight: "600", color: '#fff', fontWeight: "600", fontSize: 19, }}>{projects[1].description[0].show}</Typography>}
                        { projects[1].note && <Typography style={{ fontWeight: "600", color: '#fff', fontWeight: "600", fontSize: 19, }}>{projects[1].note}</Typography>}
                        <div style={{textAlign: "center"}}>
                            {projects[1].live && <ContainedButton onClick={()=> window.open(`${projects[1].live}`, "_blank")}>Live</ContainedButton>}
                            { projects[1].code &&  <button className="view-code" onClick={()=> window.open(`${projects[1].code}`, "_blank")}>View Code <img src="https://i.ya-webdesign.com/images/github-icon-png-7.png" alt="Barak Saidoff Github" style={{height: 25}} /></button>}
                        </div> 
                    </div>
                    <hr/>
                </TabPanel>
                <TabPanel value={activeTab} index={2}>
                    <Typography color="primary" style={{ fontSize: 32, fontWeight: 600, paddingTop: 26, paddingBottom: 45 }}>{projects[2].title}</Typography>
                    <div  className={classes.carousel} style={{ maxWidth: 700, width: '100%', height: '100%', margin: '0 auto' }}>
                        <Carousel interval={9500}>
                            {projects[2].details.map(img=>{
                                return(
                                    <Carousel.Item  className={classes.carousel} style={{ maxWidth: 700, width: '100%', height: '100%' }}>
                                        <Image
                                            src={require(`../${img.img}`)}
                                            alt={projects[2].title}
                                            thumbnail 
                                            className={classes.imgThumbnail}
                                            style={{ objectFit: 'cover', margin: '0 auto' }}
                                        />
                                    </Carousel.Item>
                                )
                            })}
                        </Carousel>
                    </div>
                    <div style={{ paddingBottom: 36}}>
                        <Typography style={{ fontWeight: "600", fontSize: 19, color: '#fff', paddingTop: 26 }}>{projects[2].description[0].intro}</Typography>
                        <Typography style={{ color: '#fff', paddingTop: 22, fontSize: 21 }}><strong style={{color: '#6DDBAF', fontWeight: "600"}}>Technologies: </strong>{projects[2].technologies}</Typography>
                        <Typography style={{ fontWeight: "600", fontSize: 19, color: '#fff', paddingTop: 26}}>{projects[2].description[0].use}</Typography>
                        { projects[2].description[0].show && <Typography style={{ fontWeight: "600", color: '#fff', fontWeight: "600", fontSize: 19, }}>{projects[2].description[0].show}</Typography>}
                        { projects[2].note && <Typography style={{ fontWeight: "600", color: '#fff', fontWeight: "600", fontSize: 19, }}>{projects[2].note}</Typography>}
                        <div style={{textAlign: "center", marginTop: 26}}>
                            {projects[2].live && <ContainedButton onClick={()=> window.open(`${projects[2].live}`, "_blank")}>Live</ContainedButton>}
                            { projects[2].code &&  <button className="view-code" onClick={()=> window.open(`${projects[2].code}`, "_blank")}>View Code <img src="https://i.ya-webdesign.com/images/github-icon-png-7.png" alt="Barak Saidoff Github" style={{height: 25}} /></button>}
                        </div> 
                    </div>
                    <hr/>
                </TabPanel>
            </Col>
        </div>
    );
};

const styles = {
    container:{
        minHeight: 'calc(100vh - 94px)'
    },
    homeBtn:{
        outline: 'none', 
        position: 'absolute', 
        left: 17.5,
        transform: 'rotate(180deg)',
        height: 40,
        maxWidth: 99,
        borderRadius: 50,
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
      root: {
        '& .MuiTabs-flexContainer': {
            display: 'flex',
            justifyContent: 'space-between',
            [theme.breakpoints.down('sm')]:{
                flexDirection: 'column',
            },
        },
        '& .MuiTab-root': {
            minWidth: 'fit-content',
        },
        '& .MuiTab-root':{
            padding: 0,
            color: '#6CDAAF',
            fontWeight: 400,
            textDecoration: 'none',
        },
     },
     carousel:{
        maxHeight: 550,
        [theme.breakpoints.down('sm')]:{
            maxHeight: 265,
        }
     },
     imgThumbnail:{
        margin: 0,
        padding: 0,
        borderRadius: 0,
        border: 'none',
        height: '100%',
        [theme.breakpoints.down('sm')]:{
            height: 'auto'
        }
     }
}));


export default ProjectContainer;