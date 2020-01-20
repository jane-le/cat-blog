import React, {Component} from "react"

class BlogContainer extends Component {
    render() {
        const {
            title,
            description,
            date, 
            image
        } = this.props;

        return(
            <div className="blog-post">
                <h1>{title}</h1>
                <p>{date}</p>
                <img src={image}/>
                <p>{description}</p>
            </div>
        ); 

    }
}

export default BlogContainer;