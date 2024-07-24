import React from "react";
import './ContactLink.scss'

function ContactLink({ href, imgSrc, alt, label }) {
    return (
        <a className="contactLink" href={href} target="_blank" rel="noopener noreferrer">
            {imgSrc && <img className="contactLink__img" src={imgSrc} alt={alt}></img>}
            {label && <span className="contactLink__label">{label}</span>}
        </a>
    );
}

export default ContactLink;
