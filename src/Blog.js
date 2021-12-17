import React, { useState, useEffect } from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import ContainedButton from './components/ContainedButton';
import { Hidden, Button, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import * as BsIcons from 'react-icons/bs';


const Blog = () => {
    const history = useHistory()
    const classes = useStyles()
    const [latestBlog, setLatestBlog] = useState('')
    const [blogTitle, setBlogTitle] = useState('')
    const [publishDate, setPublishDate] = useState('')
    const [articleLink, setArticleLink] = useState('')
    const [thumbnail, setThumbnail] = useState('')
  
    useEffect(()=>{
      fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@baraksaidoff")
      .then(resp=>resp.json())
      .then(blog=>{ 
          setLatestBlog(blog.items[0].content)
          setBlogTitle(blog.items[0].title)
          setPublishDate(blog.items[0].pubDate)
          setArticleLink(blog.items[0].link)
          setThumbnail(blog.items[0].thumbnail)
      })
      .catch(err=>console.log(err))
    })
  
    function toText(node) {
      let tag = document.createElement('div')
      tag.innerHTML = node
      node = tag.innerText
      return node
    }
  
    function getDateString(timestamp){
      if (timestamp !== "N/A"){
          var arr = timestamp.split(/[- :]/);
          timestamp = new Date(arr[0], arr[1]-1, arr[2], arr[3], arr[4], arr[5]);
          return timestamp.toDateString()
      }
    }
  
    function previewBlogContent(content){
      let parsedText = toText(content)
      if (content.length > 449 ){
          return `${parsedText.slice(0,450)} ...`
      } else {
          return `${parsedText.slice(0,450)}`
      }
    }
  
    return(
      <Col className="align-auto" xs={12} sm={12} md={10} lg={9}>
        <div className="about-section">
          <p className='skill-tag'><strong style={{fontSize: 17, fontWeight: "700"}}>Experienced in Agile Development <span style={{ color: "#6DDBAF"}}>|</span></strong> Hands on experience contributing to startups and existing code-bases through creativity and problem solving.</p>
          <p className='skill-tag'><strong style={{fontSize: 17, fontWeight: "700"}}>Military Leadership <span style={{ color: "#6DDBAF"}}>|</span> Former Sergeant in the IDF <span style={{ color: "#6DDBAF"}}>|</span></strong> Achieved award of excellence upon advanced training graduation. </p>
          {/* <p className='skill-tag'><strong style={{fontSize: 17, fontWeight: "700"}}>Background in Sales and Financial Services <span style={{ color: "#6DDBAF"}}>|</span></strong> Partnered with S2 Filings sales team and brought in leads that accounted for generating over $1 million in annual sales.</p> */}
        </div>
        <Hidden mdUp>
            <div className="projectBtnSection">
                <Button
                    variant='outlined'
                    color='primary'
                    type='submit'
                    className={classes.commonBtn}
                    onClick={()=> window.open("https://learn.co/baraksaidoff/resume", "_blank")}
                >
                    <span style={styles.backBtnLabel}>{'Download Resume'}</span>
                </Button>
            </div>
        </Hidden>
        <div className="blog-highlight" onClick={()=> window.open( `${articleLink}`, "_blank")}>   
          <Row style={{ textAlign: "left", marginBottom: 5}}>
              <Col xs={3} sm={3} md={2} lg={2} >
                  <Image style={{ height: 125, width: 125, objectFit: "cover" }} src={thumbnail} thumbnail alt="Barak Saidoff Blog Thumbnail"/>
              </Col>
              <Col xs={9} sm={9} md={8} lg={8}>
                  <h5 style={{ fontWeight: "600"}}>Latest Blog Post: </h5> 
                  <h4>{getDateString(publishDate)}</h4>
                  <h4 style={{fontWeight: 600, color: "#6DDBAF"}}>{blogTitle}</h4>
              </Col>
          </Row>                     
          <p id='blogIntro' style={{ textAlign: "left"}}>{previewBlogContent(latestBlog)}</p>
        </div>
      </Col>
    )
  }

  const useStyles = makeStyles((theme) => ({
    commonBtn:{
        marginTop: -16,
        ouline: 'none',
        fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        maxWidth: 230, 
        padding: '8px 0', 
        width: '100%',
        position: 'relative',
        borderRadius: 24,
        '&:hover':{ 
            backgroundColor: '#131313',
            color: "#fff",
            '& [class*="-endIcon"]': {
            opacity: 1,
            color: '#fff',
            },
        },
    },
  }));

  const styles = {
    projectBtn:{
        outline: 'none', 
    },
};

export default Blog;