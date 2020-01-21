import React, {Component} from "react"

class BlogContainer extends Component {
    createMinutesString() {
        const {item} = this.props; 
        const numMin = (item.text.length / 150)
        const teaCup = "🍵 "
        return(item.date + " • " + teaCup.repeat(numMin+1) + numMin.toFixed(0).toString() + " min read"); 
        
    }
    render() {
        const {
            item,
            handleOnClick
        } = this.props;

        return(
            <div className="blog-post">
                <h1 onClick={() => handleOnClick(item)}>{item.title}</h1>
                <p>{item.description}</p>
                <p>{this.createMinutesString()}</p>
            </div>
        ); 

    }
}

export default BlogContainer;