import React, { Component } from 'react'
import { Card } from 'react-bootstrap';

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
            latestBlog: data.items[0].content,
            BlogTitle: data.items[0].title,
            publishDate: data.items[0].pubDate,
            articleLink: data.items[0].link
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
        return `${parsedText.slice(0,360)} ...`
    }
    


    render() {

        return (
            <div>
                <Card className="blogHover" onClick={()=> window.open( `${this.state.articleLink}`, "_blank")}>
                    <Card.Body style={{backgroundColor:"#343A40", textAlign: "center"}}>
                        <h5 style={{color: "#57A773"}}>Latest Blog Post: </h5> 
                        <h4 style={{color: "#57A773"}}>{this.getDateString(this.state.publishDate)}</h4>
                        <h4 style={{fontWeight: 600, color: "#D3D3D3"}}>{this.state.BlogTitle}</h4>
                        <div className='blogIntro' style={{color: "#D3D3D3", textAlign: "left"}}>{this.previewBlogContent(this.state.latestBlog)}</div>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
