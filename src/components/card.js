import React from "react";

export default function Card(props){
       
    return(
        <div className="Card">
            <img src={props.img} alt="nonk" className="card_img" />
            <div className="card--stats">
                <span>likes {props.likes}</span>
                <span>comments {props.comments[1]}</span>
                <span>3k {props.views}</span>
            </div>
        </div>
    )
}