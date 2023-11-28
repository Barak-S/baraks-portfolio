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
import * as BiIcons from 'react-icons/bi';
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
				project: projects[0],
				tabClassName: classes.project1
			},
			{
				index: 1,
				label: 'Glorysmacks.com',
				link: '/glory-smacks',
				project: projects[3],
				tabClassName: classes.project2
			},
			{
				index: 2,
				label: 'Ideasicle X',
				link: '/ideasicle-x',
				project: projects[2],
				tabClassName: classes.project3
			},
			{
				index: 3,
				label: "What We Watchin'",
				link: '/what-we-watchin',
				project: projects[1],
				tabClassName: classes.project4
			},
    ]

    useEffect(()=>window.scrollTo({ top: 0, behavior: 'smooth' }),[])

    return (
        <div style={{ minHeight: 'calc(100vh - 94px)' }}>
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
					{projectTabs.map((tab, i)=>{
						return(
							<Tab
								classes={{ root: classes.tabItem }}
								key={tab.index}
								label={tab.label}
								component={NavLink}
								to={`/projects${tab.link}`}
								className={tab.tabClassName}
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
										<Typography className={classNames(classes.typography, classes.projectInfo)}>
											{projects[i].description[0].intro}
										</Typography>
										<Typography className={classNames(classes.typography, classes.projectInfo)}>
											{projects[i].description[0].use}
										</Typography>
										{projects[i].live && (
                                    		<ContainedButton 
												className={classNames(classes.liveButtonMain, i === 2 && classes.liveButton)} 
												style={{ border: `1px solid ${projects[i].colorTheme}`, color: `#131313`, backgroundColor: `${projects[i].colorTheme}`, border: 'none', outline: 'none' }} 
												onClick={()=> window.open(`${projects[i].live}`, "_blank")}
												endIcon={<BiIcons.BiWorld/>}
                                   			 >
												<span style={{ position: 'relative' }}>
													{'Live'}
													{/* <BsIcons.BsRecordFill
														style={{
															position: 'absolute',
															top: 3,
															left: 29,
															width: 10,
															height: 10,
														}}
														color={'#FF3F4D'}
													/> */}
												</span>
											</ContainedButton>
										)}
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
                        </TabPanel>
                    )
                })}
            </Container>
        </div>
    );
};

const styles = {
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
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
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
        paddingBottom: 48,
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
			marginTop: 24,
			[theme.breakpoints.down('sm')]: {
				margin: '0 auto',
				marginBottom: 4,
				marginTop: 12,
			},
			'& [class*="-endIcon"]': {
				color: '#fff',
			},
			'&:hover':{ 
				'& [class*="-endIcon"]': {
					color: '#fff',
				},
			},
		},
		viewCodeButton: {
			[theme.breakpoints.down('sm')]: {
				marginBottom: 4,
				marginTop: 12,
			},
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
			fontWeight: 400, 
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
		},
		project1: {
			// '& .MuiTab-wrapper': {
			// 	color: '#2794D2'
			// },
		 },
		 project2: {
			// '& .MuiTab-wrapper': {
			// 	color: '#EF4136'
			// }
		 },
		 project3: {
			// '& .MuiTab-wrapper': {
			// 	color: '#FEF032'
			// }
		 },
		 project4: {
			// '& .MuiTab-wrapper': {
			// 	color: '#FF3F4D'
			// }
		 },
}));


export default ProjectContainer;