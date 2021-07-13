import React, { useState } from 'react'
import { Card, Carousel, Button, Modal, Col, Image, Form } from 'react-bootstrap';
import { projects } from '../projects'
import { AiOutlineCloseCircle } from "react-icons/ai";
// import { FaArrowCircleUp } from "react-icons/fa";
import { Typography, Tabs, Tab, Grid, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../theme'
import { Redirect, Route, Switch, NavLink } from 'react-router-dom';
import TabPanel from '../components/TabPanel';

const ProjectContainer = () => {
    const [modal, setModal] = useState(false)
    const [selectedProject, setSelectedProject] = useState({})

    const toggleModal =(project={}) =>{
        setModal(!modal)
        setSelectedProject(project)
    }

    // function newCards(){
    //     return(
    //         projects.map((img)=>{
    //             return(
    //                 <article className="card1" onClick={()=>toggleModal(img)} key={img.title}>
    //                     <Image
    //                         src={require(`../${img.details[0].img}`)}
    //                         alt={img.title}
    //                         style={{marginBottom: 6}}
    //                         thumbnail 
    //                     /> 
    //                     <header className="card1-header">
    //                         <div>
    //                             <h3 style={{color: "#6DDBAF", fontWeight: "600"}}>{img.title}</h3>
    //                             <p style={{textOverflow: 'ellipsis', fontWeight: 500}}>{ img.description[0].intro.length > 99 ? img.description[0].intro.slice(0, 99) + "..." : img.description[0].intro}</p>
    //                         </div>
    //                     </header>
    //                 </article>
    //             )
    //         })
    //     )
    // }

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const classes = useStyles();
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
          label: 'Ideasicle X Marketing SASS Platform',
          link: '/Ideasicle-X',
          project: projects[2]
        },
      ]

    return (
        <div style={styles.container}>
            <Col xs={12} sm={12} md={10} lg={10}>
                {/* <section className="card1-list" style={styles.projectList}>
                    {newCards()}
                </section> */}
                <Tabs
                    className={classes.accountTabs}
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

                <Switch>
                    {/* <Route
                        exact path={'/project1'}
                        render={() => ( <ProfileTab value={activeTab} index={0} /> )}
                    />
                    <Route
                        exact path={'/project2'}
                        render={() => ( <SecurityTab value={activeTab} index={1} /> )}
                    />
                    <Route
                        exact path={'/project3'}
                        render={() => ( <NotificationsTab value={activeTab} index={2} /> )}
                    /> */}
                    {projectTabs.map((project, index)=>{
                        return(
                            <Route
                                path={`${project.link}`}
                                render={() => ( 
                                    <TabPanel value={index} index={index}>
                                        <Typography style={{ color: 'red'}} >HELLO WORLS</Typography>

                                    </TabPanel>
                                )}
                            />
                        )
                    })}
                    <Redirect to={`/projects${projectTabs[0].link}`} />
                </Switch>

            </Col>
            {/* { modal &&
                <>
                <Modal
                    show={modal}
                    onHide={toggleModal}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header>
                        <Modal.Title style={{color: '#6DDBAF', fontWeight: "600"}}>{selectedProject.title}</Modal.Title>
                        <span><AiOutlineCloseCircle size={23} className="modal-close" onClick={toggleModal}/></span>
                    </Modal.Header>
                    <div className="modalImgContainer">
                        <Carousel interval={9500}>
                            {selectedProject.details.map(img=>{
                                return(
                                    <Carousel.Item>
                                        <Image
                                        src={require(`../${img.img}`)}
                                        alt={selectedProject.title}
                                        thumbnail 
                                        className="modal-thumbnail"
                                        />
                                    </Carousel.Item>
                                )
                            })}
                        </Carousel>
                    </div>
                    <Modal.Body>
                        <Card.Text style={{fontWeight: "600", fontSize:17}}>{selectedProject.description[0].intro}</Card.Text>
                        <hr/>
                        <Card.Text><strong style={{color: '#6DDBAF', fontWeight: "600"}}>Technologies: </strong>{selectedProject.technologies}</Card.Text>
                        <Card.Text>{selectedProject.description[0].use}</Card.Text>
                        { selectedProject.description[0].show && <Card.Text>{selectedProject.description[0].show}</Card.Text>}
                        { selectedProject.note && <Card.Text style={{fontWeight: "600"}}>{selectedProject.note}</Card.Text>}
                        <div style={{textAlign: "center"}}>
                        {selectedProject.live && 
                            <button className="live-button" onClick={()=> window.open(`${selectedProject.live}`, "_blank")}>Live</button>
                        }
                        { selectedProject.code &&  
                            <button className="view-code" onClick={()=> window.open(`${selectedProject.code}`, "_blank")}>View Code <img src="https://i.ya-webdesign.com/images/github-icon-png-7.png" alt="Barak Saidoff Github" style={{height: 25}} /></button>
                        }
                        </div> 
                    </Modal.Body>
                    <Modal.Footer closeButton className="project-footer">
                        <Button className="close-modal" onClick={toggleModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
                </>
            } */}
        </div>
    );
};

const useStyles = makeStyles((theme) => ({
    container: {
        minHeight: 'calc(100vh)',
        backgroundColor: "#fff",
        [theme.breakpoints.down('sm')]:{
          minHeight: '100%',
        },
        '& .MuiTab-root': {
          minWidth: 'fit-content',
        },
      },
      banner:{
        margin: '0 auto',
      },
      header:{
        color: "#2B2D6D",
        paddingTop: 68,
        paddingBottom: 38,
        fontWeight: 600,
        fontSize: 40,
        letterSpacing: 2.25,
        [theme.breakpoints.down('sm')]:{
          fontSize: 30,
          paddingTop: 40,
          paddingBottom: 30,
          textAlign: 'center',
        }
      },
      profileHeader:{
        textAlign: 'center',
        [theme.breakpoints.down('sm')]:{
          display: 'flex',
          justContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }
      },
      userName:{
        fontSize: 24,
        marginTop: 19,
        marginBottom: 45,
        color: '#2B2D6D',
        fontWeight: 500,
      },
      accountTabs:{
        // marginBottom: 51,
        paddingTop: 150,
      },
      accordionSection:{
        marginBottom: 39,
        [theme.breakpoints.down('sm')]:{
          padding: '0px 14px',
        }
      },
      root: {
        '& .MuiTabs-flexContainer': {
            // maxWidth: 340, 
            display: 'flex',
            justifyContent: 'space-between',
        },
      },
    formInput:{
        width: 390,
        height: 56,
        borderBottom: "2px solid #309AD5",
        backgroundColor: '#F5F5F5',
        paddingTop: 10,
        paddingLeft: 8,
        [theme.breakpoints.down('sm')]:{
            width: '100%',
            marginTop: 10,
        }
    },
    fisrtName:{
        width: 390,
        height: 56,
        marginRight: 27,
        borderBottom: "2px solid #309AD5",
        backgroundColor: '#F5F5F5',
        paddingTop: 10,
        paddingLeft: 8,
        [theme.breakpoints.down('sm')]:{
            width: '100%',
            marginRight: 0,
        }
    },
    subHeader:{
        fontFamily: 'Montserrat, sans-serif',
        display: 'block',
        color: '#000',
        fontSize: 15,
        [theme.breakpoints.down('sm')]:{
            fontSize: 18,
        }
    },
    sectionHeader:{
        color: '#2193D2',
        fontSize: 18,
        fontWeight: 600,
        [theme.breakpoints.down('sm')]:{
            paddingTop: 22,
        }
    },
    formSection:{
        display: 'flex',
        [theme.breakpoints.down('sm')]:{
            flexDirection: 'column',
        }
    },
    imgSelection:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 155,
        [theme.breakpoints.down('sm')]:{
            paddingBottom: 43,
        }

    },
    uploadPicHeader:{
        color: '#2193D2',
        fontSize: 18,
        fontWeight: 600,
        paddingTop: 32,
        [theme.breakpoints.down('xs')]:{
            paddingTop: 30,
        }
    },
    uploadBtn:{
        border: '1px solid #2B2D6D',
        padding: '8px 0', 
        marginLeft: 17, 
        marginRight: 25,
        width: 245,
        [theme.breakpoints.down('sm')]:{
            marginBottom: 0,
        },
        [theme.breakpoints.down('xs')]:{
            width: 166,
        }
    },
    photoSave:{
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]:{
            flexDirection: 'column',
            transform: 'translateY(18px)',
        }

    },
    saveBtn:{
        [theme.breakpoints.down('xs')]:{
            paddingTop: 14.5,
        },
    },
    imageError:{
        color: 'red', 
        position: 'absolute', 
        bottom: 149,
        [theme.breakpoints.down('sm')]:{
            bottom: 35,
        },
        [theme.breakpoints.down('xs')]:{
            bottom: 18,
        }
    }
}));

const styles = {
    container:{
        minHeight: 'calc(100vh - 94px)'
    },
    projectList:{
        padding: 94,
    }
};

export default ProjectContainer;