import { useState } from 'react';
import './Card.css';
import MediaButton from './MediaButton';

function Card({name, description, socialMedia, interests}){
    return (
        <div className='card'>
            <h1 className='card-heading'>{name}</h1>
            <p className='card-description'>{description}</p>

            <h3 className='card-interests-heading'>Interests</h3>
            <ul className='card-interests'>
            {interests.map(interest => <li key={interest}><p>{interest}</p></li>)}
            </ul>
            
            <div className='card-mediabuttons'>
                {socialMedia.map(obj => {
                    return Object.keys(obj).map(key => <MediaButton key={key} media={key} link={obj[key]}></MediaButton>)
                })}
            </div>

            
        </div>
    )
}

const styles={
    card:{
        border: "4px solid #80BCBD",
        borderRadius: "10px"
    },

    
}

export default Card;