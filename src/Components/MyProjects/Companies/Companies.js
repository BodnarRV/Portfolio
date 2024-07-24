import React from "react";
import './Companies.scss'
import { useTranslation } from 'react-i18next';

import Malo from '../../../Assets/CompanyProject/malo.png'
import Devlight from '../../../Assets/CompanyProject/devlight.png'
import SoftServe from '../../../Assets/CompanyProject/softServe.PNG'

import SectionTitle from "../../Main/SectionTitle/SectionTitle";
import ProjectDetails from "../../Main/Projects/ProjectDetails/ProjectDetails";

function Companies() {
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
        <div className="companies">
            <SectionTitle title={t("companies")} margin="68px 0 0 0" useHash="/" />

            <div className="companies__experience">
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
        </div>
    )
}

export default Companies