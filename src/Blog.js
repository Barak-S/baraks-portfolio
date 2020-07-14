import React, { Component } from 'react'
import { Container, Col, Row, Image, Card } from 'react-bootstrap';

export default class Blog extends Component {

    state={
        latestBlog: '',
        BlogTitle: '',
        publishDate: '',
        articleLink: ''

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

    getDateString = timestamp => {
        const plus0 = num => `0${num.toString()}`.slice(-2)
      
        const d = new Date(timestamp)
      
        const year = d.getFullYear()
        const monthTmp = d.getMonth() + 1
        const month = plus0(monthTmp)
        const date = plus0(d.getDate())
        const hour = plus0(d.getHours())
        const minute = plus0(d.getMinutes())
      
        return `${date}-${month}-${year} at ${hour}:${minute}`
    }

    previewBlogContent(content){
        let parsedText = this.toText(content)
        return `${parsedText.slice(0,360)} ...`
    }
    


    render() {

        return (
            <div>
                <Card className="blogHover">
                    <Card.Body style={{backgroundColor:"#343A40", textAlign: "center"}}>
                        <h4 style={{color: "#57A773"}}>Latest Blog Post: {this.getDateString(this.state.publishDate)}</h4>
                        <h4 style={{fontWeight: 600, color: "#D3D3D3"}}>{this.state.BlogTitle}</h4>
                        <div className='blogIntro' style={{color: "#D3D3D3", textAlign: "left"}}>{this.previewBlogContent(this.state.latestBlog)}</div>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
