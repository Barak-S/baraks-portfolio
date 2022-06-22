import React, { useState, useEffect } from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import { Hidden, Button, makeStyles } from '@material-ui/core';
import Resume from './resume/Copy of Barak Saidoff Resume.pdf';


const Blog = () => {
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
  
    const toText = (node) => {
      let tag = document.createElement('div')
      tag.innerHTML = node
      node = tag.innerText
      return node
    }
  
    const getDateString = (timestamp) => {
      if (timestamp !== "N/A"){
          var arr = timestamp.split(/[- :]/);
          timestamp = new Date(arr[0], arr[1]-1, arr[2], arr[3], arr[4], arr[5]);
          return timestamp.toDateString()
      }
    }
  
    const previewBlogContent = (content) => {
      let parsedText = toText(content)
      if (content.length > 449 ){
          return `${parsedText.slice(0,450)} ...`
      } else {
          return `${parsedText.slice(0,450)}`
      }
    }
  
    return(
      <Col className="align-auto" xs={12} sm={12} md={10} lg={9}>
        {articleLink && blogTitle && (
					<div className={classes.blogHighlight} onClick={()=> window.open( `${articleLink}`, "_blank")}>   
						<Row style={{ textAlign: "left", marginBottom: 5}}>
								<Col xs={3} sm={3} md={2} lg={2} >
										<Image style={{ height: 125, width: 125, objectFit: "cover" }} src={thumbnail} thumbnail alt="Barak Saidoff Blog Thumbnail"/>
								</Col>
								<Col xs={9} sm={9} md={8} lg={8}>
										<h5 style={{ fontWeight: "600"}}>Latest Blog Post: </h5> 
										<h4>{getDateString(publishDate)}</h4>
										<h4 style={{fontWeight: 600, color: "#fff"}}>{blogTitle}</h4>
								</Col>
						</Row>                     
						<p id='blogIntro' style={{ textAlign: "left" }}>{previewBlogContent(latestBlog)}</p>
					</div>
				)}
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
        borderColor: '#35c958',
        color: '#35c958',
        '&:hover':{ 
            backgroundColor: '#35c958',
            color: "#fff",
            '& [class*="-endIcon"]': {
            opacity: 1,
            color: '#fff',
          },
        },
    },
		blogHighlight: {
			maxWidth: 1500,
			margin: '0rem auto 2rem auto',
			backgroundColor: '#131313',
			color: '#fff',
			zIndex: 1,
			boxShadow: '-0.125rem 0 1rem #000',
			WebkitTransition: '0.3s ease-in-out',
			transition: '0.3s ease-in-out',
			borderRadius: 16,
			paddingLeft: 20,
			paddingRight: 20,
			paddingBottom: 12,
			paddingTop: 20,
			border: '1px solid white',
			'&:hover': {
				cursor: 'pointer',
			}
		},
		
		// .blog-highlight{
		// 	max-width: 1500px;
		// 	margin: 0rem auto 2rem auto;
		// 	background-color: #131313;
		// 	color: #fff;
		// 	z-index: 1;
		// 	box-shadow: -0.125rem 0 1rem #000;
		// 	-webkit-transition: 0.3s ease-in-out;
		// 	transition: 0.3s ease-in-out;
		// 	border-radius: 16px;
		// 	padding-left: 20px;
		// 	padding-right: 20px;
		// 	padding-bottom: 12px;
		// 	padding-top: 20px;
		// 	border: 1px solid white;
		// }
		
		// .blog-highlight:hover{
		// 	cursor: pointer;
		// }
  }));

  const styles = {
    projectBtn:{
        outline: 'none', 
    },
};

export default Blog;