import React from 'react';
import './card.css';

function Card(props)
{
    return(
        <div className="card" id="about" style={{flex: 1}}>
            <h3 className="card-title">{props.name}</h3>
            <img src={props.src} className="card-img-top" alt="Some image"/>
            <div className="card-body">    
                <p className="card-text">{props.description}</p>
                <a href={props.linky} className="btn btn-primary">Know more</a>
            </div>
        </div>
    );
}

export default Card;