import React from 'react';
import './style.css';
// requires bootstrap

// title, location, event
const Card = props=>{
    return(
        <div className = "card text-center shadow">
            <div className= "card-body text-dark">
                <h3 className = "card-title">{props.title}</h3>
                <h4>Location: {props.location}</h4>
                <p className = "card-text text-secondary">
                    {props.event}
                </p>
            </div>
        </div>
    );
}

export default Card;