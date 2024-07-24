import React from "react";
import './GitHubButton.scss'

function GitHubButton({ imgSrc, title, gitHubLink }) {
    return (
        <a className="btnLink" href={gitHubLink} target="_blank">
            <img className="btnLink__img" src={imgSrc} alt="GitHub"></img>
            {title}
        </a>
    )
}

export default GitHubButton