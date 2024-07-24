import React from "react";
import './PrimaryButton.scss';

function PrimaryButton({ title, className, imgSrc, onClick }) {
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <button className={`primaryButton ${className}`} onClick={handleClick}>
            {title}
            {imgSrc && <img src={imgSrc} alt="" className="primaryButton__img" />}
        </button>
    );
}

export default PrimaryButton;
