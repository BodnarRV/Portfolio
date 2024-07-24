import React from "react";
import { useTranslation } from 'react-i18next';
import './PreviewSection.scss'

import PrimaryButton from "../../Buttons/PrimaryButton/PrimaryButton";

import LogoMain from '../../../Assets/LogoMain.png'
import Avatar from '../../../Assets/Avatar.png'
import Dots from '../../../Assets/Dots.png'


function PreviewSection() {
    const { t } = useTranslation();

    return (
        <section className="container">
                <div className="container__aboutMe">
                    <h1 className="container__aboutMe-title" dangerouslySetInnerHTML={{ __html: t("aboutMeTitle") }} />
                    <h2 className="container__aboutMe-text" dangerouslySetInnerHTML={{ __html: t("aboutMeSubtitle") }} />
                    <PrimaryButton className="container__aboutMe-btn" title={t("contactMe")} />
                </div>

                <div className="container__aboutMePhoto">
                    <img className="container__aboutMePhoto-logo" src={LogoMain}></img>
                    <img className="container__aboutMePhoto-img" src={Avatar}></img>
                    <img className="container__aboutMePhoto-dots" src={Dots}></img>
                    <div className="container__aboutMePhoto-currentWork">
                        <div className="container__aboutMePhoto-currentWork-square"></div>
                        {t("currentWotk")}
                    </div>
                </div>
        </section>
    )
}

export default PreviewSection