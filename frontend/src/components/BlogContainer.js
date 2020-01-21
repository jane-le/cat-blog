import React, {Component} from "react"

class BlogContainer extends Component {
    createMinutesString() {
        const {item} = this.props; 
        const numMin = (item.text.length / 250)
        const teaCup = "🍵 "
        return(item.date + " • " + teaCup.repeat(numMin.toFixed(0)) + numMin.toFixed(0).toString() + " min read"); 
        
    }

    
    render() {
        const {
            item,
            handleOnClick
        } = this.props;

        return(
            <div className="fade-in blog-post">
                <h1 onClick={() => handleOnClick(item)}>{item.title}</h1>
                <p>{item.description}</p>
                <p>{this.createMinutesString()}</p>
            </div>
        ); 

    }
}

export default BlogContainer;