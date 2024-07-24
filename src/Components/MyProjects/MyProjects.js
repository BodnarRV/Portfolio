import React from "react";
import './MyProjects.scss'
import { useTranslation } from 'react-i18next';

import SectionTitle from "../Main/SectionTitle/SectionTitle";
import Companies from "./Companies/Companies";
import MyWebProjects from "./MyWebProjects/MyWebProjects";
import Courses from "./Courses/Courses";

function MyProjects() {
    const { t } = useTranslation();

    return (
        <section className="container">
            <SectionTitle title={t("myExperience")} margin="0" useHash="/" subTitle={t("projectsSubtitle")}/>
            <Companies />
            <MyWebProjects />
            <Courses />
        </section>
    )
}

export default MyProjects