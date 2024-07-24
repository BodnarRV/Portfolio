import React from "react";
import './Skills.scss'

import { useTranslation } from 'react-i18next';
import SectionTitle from "../SectionTitle/SectionTitle";
import SkillForm from "./SkillForm/SkillForm";

import SkillsImg from '../../../Assets/SkillsImg.png'

function Skills() {
    const { t } = useTranslation();

    return (
        <section className="container">
            <SectionTitle title={t("skills")} showViewAll={false} lineWidth="40%" useHash={"#"}/>

            <div className="container__content">
                <img className="container__content-img" src={SkillsImg}></img>
                <div className="container__content-skills">
                    <SkillForm title={t("skillsTitleDataBase")} skills={t("skillsDataBase")}/>  
                    <SkillForm title={t("skillsTitleLanguage")} skills={t("skillsLanguages")}/>
                    <SkillForm title={t("skillsTitleTools")} skills={t("skillsTools")}/>
                    <SkillForm title={t("skillsTitleFrameworks")} skills={t("skillsFrameworks")}/>
                    <SkillForm title={t("skillsTitleOther")} skills={t("skillsOther")}/>
                </div>
            </div>
        </section>
    )
}

export default Skills