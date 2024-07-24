import React from "react";
import './AboutMe.scss'

import { useTranslation } from 'react-i18next';
import SectionTitle from "../SectionTitle/SectionTitle";
import AboutMeContent from "./AboutMeContent/AboutMeContent";


function AboutMe({ showButton = true }) {
    const { t } = useTranslation();

    return (
        <section className="container">
            <SectionTitle title={t("aboutMe")} lineWidth="55%" margin="112px 0 40px 0" useHash={"#"}/>
            <AboutMeContent />
        </section>
    )
}

export default AboutMe