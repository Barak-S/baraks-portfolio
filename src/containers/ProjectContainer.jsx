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
import classNames from 'classnames';


const ProjectContainer = ({ selectedTheme, setSelectedTheme }) => {
    const classes = useStyles()
    const history = useHistory()
    const [activeTab, setActiveTab] = useState(0)

    const projectTabs = [
			{
				index: 0,
				label: 'Watery.com',
				link: '/watery',
				project: projects[0]
			},
			{
				index: 1,
				label: 'Glorysmacks.com',
				link: '/glory-smacks',
				project: projects[3]
			},
			{
				index: 2,
				label: 'Ideasicle X',
				link: '/ideasicle-x',
				project: projects[2]
			},
			{
				index: 3,
				label: "What We Watchin'",
				link: '/what-we-watchin',
				project: projects[1]
			},
    ];

    useEffect(()=>window.scrollTo({ top: 0, behavior: 'smooth' }),[])

    return (
        <div style={styles.container}>
            <Container>
                <Hidden mdUp>
                    <div style={{ paddingTop: 84, width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <Button
                            style={{ maxWidth: 310, color: selectedTheme ? selectedTheme : undefined, border: selectedTheme ? `1px solid ${selectedTheme}` : undefined, transform: 'rotate(180deg)', borderRadius: 24, width: '100%', marginTop: 26 }}
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
                    indicatorColor={`secondary`}
                    onChange={(_e, val) => setActiveTab(val)}
                    >
                    {projectTabs.map((tab,i)=>{
                        return(
                        <Tab 
                            classes={{ label: classes.label }}
                            key={tab.index} 
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
                    return(
                        <TabPanel value={activeTab} index={i}>
                            <div className={classes.headerButtonWrapper}>
                                <Typography className={classNames(classes.typography, classes.projectTitle)} style={{ color: `${projects[i].colorTheme}` }}>{projects[i].title}</Typography>
                                {projects[i].live && (
                                    <ContainedButton 
                                        className={classNames(classes.liveButtonMain, i === 2 && classes.liveButton)} 
                                        style={{ border: `1px solid ${projects[i].colorTheme}`, color: `#131313`, backgroundColor: `${projects[i].colorTheme}`, border: 'none', outline: 'none' }} 
                                        onClick={()=> window.open(`${projects[i].live}`, "_blank")}
                                    >
                                    {'Live'}
                                    </ContainedButton>
                                )}
                                {projects[i].code &&  (
																	<Button
																		className={classes.viewCodeButton}
																		style={{ maxWidth: 165, color: selectedTheme ? selectedTheme : undefined, border: selectedTheme ? `1px solid ${selectedTheme}` : undefined, borderRadius: 24, width: '100%' }}
																		type='submit'
																		endIcon={<img src="https://i.ya-webdesign.com/images/github-icon-png-7.png" alt="Barak Saidoff Github" style={{ height: 25 }} />}
																		onClick={()=> window.open(`${projects[i].code}`, "_blank")}
																	>
																		View Code
																	</Button>
                                )}
                            </div>
                            <div className={classes.projectPanel}>
															<Grid item lg={4} md={4} sm={12} xs={12}>
																<div className={classes.descSection}>
																	{projects[i].subTitle && (
																		<Typography 
																			className={classNames(classes.typography, classes.projectInfo)}
																		>
																			{projects[i].subTitle}
																		</Typography>
																	)}
																	<Typography className={classNames(classes.typography, classes.projectInfo)}>{projects[i].description[0].intro}</Typography>
																	<Typography className={classNames(classes.typography, classes.projectInfo)}>{projects[i].description[0].use}</Typography>
																</div>
															</Grid>
															<Grid item lg={8} md={8} sm={12} xs={12}>
																<div className={classes.carousel}>
																	<Carousel interval={9500}>
																		{projects[i].details.map(img=>{
																			return(
																				<Carousel.Item  className={classes.carousel}>
																					<Image
																						src={require(`../${img.img}`)}
																						alt={projects[i].title}
																						thumbnail 
																						className={classes.imgThumbnail}
																					/>
																				</Carousel.Item>
																			)
																		})}
																	</Carousel>
																</div>
															</Grid>
                            </div>
                            <Typography 
                                className={classes.technologiesText} 
                                style={{ color: '#fff', paddingTop: 4, fontSize: 21, textAlign: 'center' }}
                            >
                                <strong style={{ color: `${projects[i].colorTheme}`, fontWeight: "600" }}>Technologies: </strong>
                                {projects[i].technologies}
                            </Typography>														
                            <Hidden mdUp>
                                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                    <Button
                                        style={{ maxWidth: 310, color: selectedTheme ? selectedTheme : undefined, border: selectedTheme ? `1px solid ${selectedTheme}` : undefined, transform: 'rotate(180deg)', borderRadius: 24, width: '100%', marginTop: 26, marginBottom: 16 }}
                                        type='submit'
                                        endIcon={<BsIcons.BsArrowRight/>}
                                        onClick={()=>history.push('/')}
                                    >
                                        <span style={styles.backBtnLabel}>{'Back'}</span>
                                    </Button>

                                </div>
                        </Hidden>
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
    backBtnLabel:{
        transform: 'rotate(180deg)',
    }
};

const useStyles = makeStyles((theme) => ({
      projectTabs:{
        paddingTop: 150,
        [theme.breakpoints.down('sm')]:{
            paddingTop: 24,
        },
      },
      projectPanel:{
        display: 'flex',
        paddingBottom: 24,
        [theme.breakpoints.down('sm')]:{
            flexDirection: 'column',
        }
      },
      descSection:{
        paddingRight: 15,
        [theme.breakpoints.down('sm')]:{
            paddingTop: 0,
            paddingRight: 0,
            paddingBottom: 29,
        }
      },
      typography:{
        fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      },
      technologiesText: {
        fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        paddingBottom: 32,
        [theme.breakpoints.down('sm')]: {
            paddingBottom: 2,
        }
      },
      root: {
        '& .MuiTabs-flexContainer': {
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            [theme.breakpoints.down('sm')]: {
                flexDirection: 'column',
								alignItems: 'center'
            },
        },
        '& .MuiTab-root': {
            padding: 0,
            color: '#fff',
            fontWeight: 400,
            fontSize: 17.5,
            textDecoration: 'none',
            fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
            [theme.breakpoints.down('sm')]:{
                width: '50%',
                fontSize: 14,
            }
                
        },
     },
     carousel:{
        height: 550,
        [theme.breakpoints.down('xs')]:{
            height: 250,
        }
     },
     imgThumbnail:{
        margin: 0,
        padding: 0,
        borderRadius: 0,
        objectFit: 'cover',
        border: 'none',
        height: '100%',
        width: '100%',
    },
    buttonSection:{
        display: 'flex',
        textAlign: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        height: 110,
        justifyContent: 'space-between',    
        marginTop: 35,
				[theme.breakpoints.down('sm')]: {
					height: 'auto',
					marginBottom: 26
				}
    },
		liveButtonMain: {
			[theme.breakpoints.down('sm')]: {
				marginBottom: 4,
                marginTop: 12,
			}
		},
        viewCodeButton: {
            [theme.breakpoints.down('sm')]: {
				marginBottom: 4,
                marginTop: 12,
			}
        },
		liveButton: {
			'& [class*="-endIcon"]': {
				color: '#131313',
			},
			'&:hover':{ 
				'& [class*="-endIcon"]': {
					color: '#131313',
				},
			},
		},
		projectInfo: {
			fontWeight: 600, 
			fontSize: 19, 
			paddingBottom: 12, 
			color: '#fff',
			[theme.breakpoints.down('xs')]: {
				textAlign: 'center',
				fontWeight: 500,
				fontSize: 16,
			}
		},
		projectTitle: {
			fontSize: 32, 
			fontWeight: 600, 
			[theme.breakpoints.down('xs')]: {
				fontSize: 22,
				textAlign: 'center',
			}
		},
        headerButtonWrapper: {
            display: 'flex', 
            width: '100%', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            paddingBottom: 12, 
            padding: '12px 0px',
            [theme.breakpoints.down('sm')]: {
                flexDirection: 'column',
                padding: '16px 0px',
            }
            
        }
}));


export default ProjectContainer;