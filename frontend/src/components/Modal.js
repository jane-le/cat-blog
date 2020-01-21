import React, { Component } from "react";

export default class CustomModal extends Component {
    createMinutesString() {
        const {item} = this.props; 
        const numMin = (item.text.length / 150)
        const teaCup = "🍵 "
        return(item.date + " • " + teaCup.repeat(numMin+1) + numMin.toFixed(0).toString() + " min read"); 
        
    }

    createLikesString() {
        const {item} = this.props;
        return("❤️ " + item.likes.toString());
    }
    render() {
    const { 
        item,
        closeModal } = this.props;
    return (
        <div className="modal-container blog-post">
            <h1>{item.title}</h1>
            <p>{this.createMinutesString()}</p>
            <p>{item.description}</p>
            <img src={item.image}/>
            <p>{item.text}</p> 
            <div className="modal-btn-container">
                <button className="modal-btn">{this.createLikesString()}</button>
                <button onClick={() => closeModal()} className="modal-btn">✖️</button>
            </div>
        </div>
    );
    }
}