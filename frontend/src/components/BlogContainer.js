import React, {Component} from "react"

class BlogContainer extends Component {
    constructor(props) {
        super(props); 
        this.numMin = 0;
        
    }
    createMinutesString() {
        const {item} = this.props; 
        const numMin = (item.text.length / 150)
        const teaCup = "🍵 "
        return(item.description + " • " + teaCup.repeat(numMin+1) + numMin.toFixed(0).toString() + " min read"); 
        
    }
    componentDidMount() {

    }
    render() {
        const {
            item,
            handleOnClick
        } = this.props;

        return(
            <div className="blog-post">
                <h1 onClick={() => handleOnClick(item)}>{item.title}</h1>
                <p>{item.date}</p>
                <p>{this.createMinutesString()}</p>
            </div>
        ); 

    }
}

export default BlogContainer;