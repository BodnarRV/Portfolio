import React from "react";
import './AboutmeFull.scss'
import { useTranslation } from 'react-i18next';

import SectionTitle from "../Main/SectionTitle/SectionTitle";
import AboutMeContent from "../Main/AboutMe/AboutMeContent/AboutMeContent";
import SkillForm from "../Main/Skills/SkillForm/SkillForm";
import FunFactsImg from '../../Assets/FunFactsImg.png'

function AboutmeFull() {
    const { t } = useTranslation();

    return (
        <section className="container">
            <SectionTitle title={t("aboutMe")} margin={"0 0 86px 0"} useHash={"/"} subTitle={t("whoAmI")} />
            <AboutMeContent showButton={false} />

            <SectionTitle title={t("skills")} margin={"112px 0 0 0"} useHash={"#"} />
            <div className="skills">
                <SkillForm title={t("skillsTitleFrameworks")} skills={t("skillsFrameworks")} />
                <SkillForm title={t("skillsTitleDataBase")} skills={t("skillsDataBase")} />
                <SkillForm title={t("skillsTitleLanguage")} skills={t("skillsLanguages")} />
                <SkillForm title={t("skillsTitleOther")} skills={t("skillsOther")} />
                <SkillForm title={t("skillsTitleTools")} skills={t("skillsTools")} />
            </div>

            <SectionTitle title={t("funFacts")} margin={"112px 0 0 0"} useHash={"#"} />
            <div className="funFactsContqainer">
                <div className="funFacts">
                    <label className="funFacts__fact" dangerouslySetInnerHTML={{ __html: t("funFact1") }}></label>
                    <label className="funFacts__fact" dangerouslySetInnerHTML={{ __html: t("funFact2") }}></label>
                    <label className="funFacts__fact" dangerouslySetInnerHTML={{ __html: t("funFact3") }}></label>
                    <label className="funFacts__fact" dangerouslySetInnerHTML={{ __html: t("funFact4") }}></label>
                    <label className="funFacts__fact" dangerouslySetInnerHTML={{ __html: t("funFact5") }}></label>
                    <label className="funFacts__fact" dangerouslySetInnerHTML={{ __html: t("funFact6") }}></label>
                    <label className="funFacts__fact" dangerouslySetInnerHTML={{ __html: t("funFact7") }}></label>
                    <label className="funFacts__fact" dangerouslySetInnerHTML={{ __html: t("funFact8") }}></label>
                </div>

                <div className="funFactsContqainer__image">
                    <img className="funFactsContqainer__image-img" src={FunFactsImg} alt="FUN Facts"></img>
                </div>
            </div>

        </section>
    )
}

export default AboutmeFull