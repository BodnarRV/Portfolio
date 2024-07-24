import React from "react";
import "./MyWebProjects.scss"
import { useTranslation } from 'react-i18next';

import ProjectDetails from "../../Main/Projects/ProjectDetails/ProjectDetails";
import SectionTitle from "../../Main/SectionTitle/SectionTitle";

import Github from '../../../Assets/social/Github.svg'

function MyWebProjects() {
    const { t } = useTranslation();

    const responsibilitiesArr = []


    const monblanprojectResponsibilitiesArr = [
        t("monblanprojectResponsibilities")
    ]

    return (
        <div className="myWebProjects">
            <SectionTitle title={t("myWebProjects")} useHash={"#"} margin={"81px 0 0 0"} />

            <div className="myWebProjects__experience">
                <ProjectDetails
                    role={t("frontDev")}
                    companyName={"Monblan"}
                    duration={t("personalProject")}
                    responsibilities={monblanprojectResponsibilitiesArr}
                    aboutProject={t("monblanprojectAbout")}
                    showImage={false}
                    showButton={true}
                    gitHubButtonProps={{
                        imgSrc: Github,
                        title: t("viweGitHub"),
                        gitHubLink: "https://github.com/BodnarRV/monblanproject"
                    }}
                />

                <ProjectDetails
                    role={t("frontDev")}
                    companyName={"Movies"}
                    duration={t("personalProject")}
                    responsibilities={monblanprojectResponsibilitiesArr}
                    aboutProject={t("moviesAbout")}
                    showImage={false}
                    showButton={true}
                    gitHubButtonProps={{
                        imgSrc: Github,
                        title: t("viweGitHub"),
                        gitHubLink: "https://github.com/BodnarRV/movies/tree/main"
                    }}
                />

                <ProjectDetails
                    role={t("frontDev")}
                    companyName={"Type_Master"}
                    duration={t("personalProject")}
                    responsibilities={monblanprojectResponsibilitiesArr}
                    aboutProject={t("typeMasterAbout")}
                    showImage={false}
                    showButton={true}
                    gitHubButtonProps={{
                        imgSrc: Github,
                        title: t("viweGitHub"),
                        gitHubLink: "https://github.com/BodnarRV/type_master/tree/master"
                    }}
                />

                <ProjectDetails
                    role={t("frontDev")}
                    companyName={"Space_lance"}
                    duration={t("personalProject")}
                    responsibilities={monblanprojectResponsibilitiesArr}
                    aboutProject={t("spaceLanceAbout")}
                    showImage={false}
                    showButton={true}
                    gitHubButtonProps={{
                        imgSrc: Github,
                        title: t("viweGitHub"),
                        gitHubLink: "https://github.com/BodnarRV/spacelance"
                    }}
                />

                <ProjectDetails
                    role={t("frontDev")}
                    companyName={"Product_preview"}
                    duration={t("personalProject")}
                    responsibilities={monblanprojectResponsibilitiesArr}
                    aboutProject={t("productAbout")}
                    showImage={false}
                    showButton={true}
                    gitHubButtonProps={{
                        imgSrc: Github,
                        title: t("viweGitHub"),
                        gitHubLink: "https://github.com/BodnarRV/Product_preview/tree/master"
                    }}
                />

<ProjectDetails
                    role={t("frontDev")}
                    companyName={"Portfolio"}
                    duration={t("personalProject")}
                    responsibilities={monblanprojectResponsibilitiesArr}
                    aboutProject={t("portfolioAbout")}
                    showImage={false}
                    showButton={true}
                    gitHubButtonProps={{
                        imgSrc: Github,
                        title: t("viweGitHub"),
                        gitHubLink: "https://github.com/BodnarRV/Product_preview/tree/master"
                    }}
                />
            </div>
        </div>
    )

}

export default MyWebProjects