import React, { Component } from 'react'
import { Card, Col } from 'react-bootstrap';
import './App.css';

export default class Blog extends Component {

    state={
        latestBlog: '',
        BlogTitle: '',
        publishDate: '',
        articleLink: '',
        formattedDate: ''
    }

    componentDidMount(){
        fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@baraksaidoff")
        .then(resp=>resp.json())
        .then(data=> this.setState({
            latestBlog: data.items[1].content,
            BlogTitle: data.items[1].title,
            publishDate: data.items[1].pubDate,
            articleLink: data.items[1].link
        }))
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
        if (content.length > 424 ){
            return `${parsedText.slice(0,425)} ...`
        } else {
            return `${parsedText.slice(0,425)}`
        }
    }
    

    render() {

        return (
            <div style={{marginBottom: "2%"}}>
                <Col className="profileCol" xs={12} sm={12} md={10} lg={10}>
                    <div>
                        <Card onClick={()=> window.open( `${this.state.articleLink}`, "_blank")}>
                            <Card.Body className="blogHighlight" style={{ textAlign: "center"}}>
                                <h5 style={{color: "#000000", fontWeight: "500"}}>Latest Blog Post: </h5> 
                                <h4 style={{color: "#000000"}}>{this.getDateString(this.state.publishDate)}</h4>
                                <h4 style={{fontWeight: 600, color: "#000000"}}>{this.state.BlogTitle}</h4>
                                <p id='blogIntro' style={{color: "#000000", textAlign: "left"}}>{this.previewBlogContent(this.state.latestBlog)}</p>
                            </Card.Body>
                        </Card>
                    </div>   
                </Col>
            </div>
        )
    }
}
