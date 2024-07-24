import React from "react";
import './AboutMeContent.scss'

import { useTranslation } from 'react-i18next';
import { FaLongArrowAltRight } from "react-icons/fa";


import PrimaryButton from "../../../Buttons/PrimaryButton/PrimaryButton";
import AboutMeImg from '../../../../Assets/AboutMeImg.png'


function AboutMeContent({ showButton = true }) {
    const { t } = useTranslation();

    const handleReadMoreClick = () => {
        window.location.href = '/about-me';
    };

    return (
        <div className="content">
            <div className="content__aboutMeContent">
                <p className="content__aboutMeContent-aboutMe" dangerouslySetInnerHTML={{ __html: t("aboutMeText") }}></p>
                {showButton && (
                    <PrimaryButton
                        title={t("readMore")}
                        className="content__aboutMeContent-btn"
                        imgSrc={FaLongArrowAltRight}
                        onClick={handleReadMoreClick}
                    />
                )}
            </div>

            <div className="content__aboutMeIgm">
            <img className="content__aboutMeIgm-img" src={AboutMeImg}></img>
            </div>
        </div>
    )
}

export default AboutMeContent