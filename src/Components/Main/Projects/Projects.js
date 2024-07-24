import React from "react";
import { useTranslation } from 'react-i18next';
import './Projects.scss'

import ProjectDetails from "./ProjectDetails/ProjectDetails";
import SectionTitle from "../SectionTitle/SectionTitle";

import Malo from '../../../Assets/CompanyProject/malo.png'
import Devlight from '../../../Assets/CompanyProject/devlight.png'
import SoftServe from '../../../Assets/CompanyProject/softServe.PNG'

function Projects({ showTitle = true }) {
    const { t } = useTranslation();

    const maloResponsibilities = [
        t("maloResponsibilities"),
        t("maloResponsibilities2"),
        t("maloResponsibilities3")
    ];
    const devlightResponsibilities = [
        t("devlightResponsibilities")
    ]
    const softServeResponsibilities = [
        t("softServeResponsibilities1"),
        t("softServeResponsibilities2")
    ]

    return (
        <section className="container">
            {showTitle && (
                <SectionTitle 
                    title={t("works")} 
                    viewAll={{ show: true, path: "/projects" }} 
                    lineWidth="70%" 
                    useHash="#" 
                />
            )}

            <div className="container__projects">
                <ProjectDetails 
                    img={Malo}
                    role={t("iOSDev")}
                    companyName={t("maloName")}
                    duration={t("maloDuration")}
                    responsibilities={maloResponsibilities}
                    aboutProject={t("maloAbout")} />

                <ProjectDetails 
                    img={Devlight}
                    role={t("iOSDev")}
                    companyName={t("devlightName")}
                    duration={t("devlightDuration")}
                    responsibilities={devlightResponsibilities}
                    aboutProject={t("devlightAbout")} />

                <ProjectDetails 
                    img={SoftServe}
                    role={t("iOSDev")}
                    companyName={t("softServeName")}
                    duration={t("softServeDuration")}
                    responsibilities={softServeResponsibilities}
                    aboutProject={t("softServeAbout")} />
            </div>
        </section>
    )
}

export default Projects