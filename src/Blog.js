import React, { Component } from 'react'
import { Card } from 'react-bootstrap';
import SocialHandles from './SocialHandles'
import './App.css';


export default class Blog extends Component {

    state={
        latestBlog: '',
        BlogTitle: '',
        publishDate: '',
        articleLink: '',
        formattedDate: ''

    }

    getLatestBlog(){
        fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@baraksaidoff")
        .then(resp=>resp.json())
        .then(data=> this.setState({
            latestBlog: data.items[2].content,
            BlogTitle: data.items[2].title,
            publishDate: data.items[2].pubDate,
            articleLink: data.items[2].link
        }))
    }

    componentDidMount(){
        this.getLatestBlog()
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
        return `${parsedText.slice(0,425)} ...`
    }
    


    render() {

        return (
            <div style={{margin: "2.5%", paddingBottom: 25, fontWeight: "600"}}>
                    <div style={{margin: "1%"}}>
                    <Card onClick={()=> window.open( `${this.state.articleLink}`, "_blank")}>
                    <Card.Body className="blogHighlight" style={{backgroundColor:"#ffffff", textAlign: "center"}}>
                        <h5 style={{color: "#000000", fontWeight: "500"}}>Latest Blog Post: </h5> 
                        <h4 style={{color: "#000000"}}>{this.getDateString(this.state.publishDate)}</h4>
                        <h4 style={{fontWeight: 600, color: "#000000"}}>{this.state.BlogTitle}</h4>
                        <p id='blogIntro' style={{color: "#000000", textAlign: "left"}}>{this.previewBlogContent(this.state.latestBlog)}</p>
                    </Card.Body>
                        </Card>
                        {/* <SocialHandles/> */}
                    </div>   
            </div>
        )
    }
}
