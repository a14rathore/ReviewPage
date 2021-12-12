import React from 'react';
import './card.css';
// import photo from '../assets copy/profile-photo-2.png';

function card(props) {
    return (
        <div className={`card ${props.position}`}>
            <img className={`pattern ${props.stylep}`} src={props.pattern} alt="pattern"></img>
            <img className="photo" src={props.data.photo} alt="img"></img>
            <h4 className="des">{props.data.description}</h4>
            <h3 className="nam">{props.data.name}</h3>
            <p className="pos">{props.data.role}</p>
             
        </div>
    );
}

export default card;