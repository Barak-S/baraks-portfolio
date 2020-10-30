import React, { Component } from 'react'
import { Card, Col, Row, Image } from 'react-bootstrap';
import './App.css';

export default class Blog extends Component {

    state={
        latestBlog: '',
        BlogTitle: '',
        publishDate: '',
        articleLink: '',
        formattedDate: '',
        thumbnail: ''
    }

    componentDidMount(){
        fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@baraksaidoff")
        .then(resp=>resp.json())
        .then(data=> this.setState({
            latestBlog: data.items[0].content,
            BlogTitle: data.items[0].title,
            publishDate: data.items[0].pubDate,
            articleLink: data.items[0].link,
            thumbnail: data.items[0].thumbnail
        },()=>console.log(data)))
    }

    toText(node) {
         let tag = document.createElement('div')
         tag.innerHTML = node
         node = tag.innerText
         return node
    }

    getDateString(timestamp){
            var arr = timestamp.split(/[- :]/);
            timestamp = new Date(arr[0], arr[1]-1, arr[2], arr[3], arr[4], arr[5]);
            return timestamp.toDateString()
    }

    previewBlogContent(content){
        let parsedText = this.toText(content)
        if (content.length > 449 ){
            return `${parsedText.slice(0,450)} ...`
        } else {
            return `${parsedText.slice(0,450)}`
        }
    }
    

    render() {

        return (
            <div id="blog" style={{margin: 8, marginBottom: "2%"}}>
                <Col className="profileCol" xs={12} sm={12} md={9} lg={9}>
                <hr/>    
                    <Card onClick={()=> window.open( `${this.state.articleLink}`, "_blank")}>
                        <Card.Body className="blogHighlight" style={{ textAlign: "center"}}>
                            <Row style={{ textAlign: "left", marginBottom: 5}}>
                                <Col xs={3} sm={3} md={2} lg={2} >
                                    <Image style={{ height: 125, width: 125, objectFit: "cover" }} src={this.state.thumbnail} thumbnail alt="Barak Saidoff Blog Thumbnail"/>
                                </Col>
                                <Col xs={9} sm={9} md={8} lg={8} >
                                    <h5 style={{color: "#191919", fontWeight: "600"}}>Latest Blog Post: </h5> 
                                    <h4 style={{color: "#191919"}}>{this.getDateString(this.state.publishDate)}</h4>
                                    <h4 style={{fontWeight: 600, color: "#0377B5"}}>{this.state.BlogTitle}</h4>
                                </Col>
                            </Row>
                            <p id='blogIntro' style={{color: "#191919", textAlign: "left"}}>{this.previewBlogContent(this.state.latestBlog)}</p>
                        </Card.Body>
                    </Card>   
                </Col>
            </div>
        )
    }
}
