import React from 'react';
import './imagecard.css';
import PropTyes from 'prop-types';

const proptypes = {
    url: PropTyes.string.isRequired
}

const ImageCard = ({url}) => {
    return (
        <div className="image-wrapper"> 
            <img className="image-wrapper__image" src={url}/>
        </div>
    )
}

ImageCard.PropTyes = proptypes;
export default ImageCard;