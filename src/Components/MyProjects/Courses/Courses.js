import React from "react";
import './Courses.scss'
import { useTranslation } from 'react-i18next';

import SectionTitle from "../../Main/SectionTitle/SectionTitle";
import ProjectDetails from "../../Main/Projects/ProjectDetails/ProjectDetails";

import goITimg from '../../../Assets/CompanyProject/goIT.jpeg'
import youTubeImg from '../../../Assets/social/YouTube.png'

function Courses() {
    const { t } = useTranslation();

    const responsibilitiesArr = [
        t("student")
    ]

    return (
        <div className="courses">
            <SectionTitle title={t("ITCourses")} margin={"81px 0 0 0"} useHash={"#"} />

            <div className="courses__items">
                <ProjectDetails
                    role={t("frontDev")}
                    companyName={t("learnTogether")}
                    duration={t("ITCourses").charAt(0).toUpperCase() + t("ITCourses").slice(1)}
                    responsibilities={responsibilitiesArr}
                    aboutProject={t("learnTogetherAbour")}
                    showImage={false}
                    showButton={true}
                    gitHubButtonProps={{
                        imgSrc: youTubeImg,
                        title: t("viewGoIT"),
                        gitHubLink: "https://www.youtube.com/channel/UCo8KNXmB8Yb_07FzwCL6HgQs"
                    }}
                />

                <ProjectDetails
                    img={goITimg}
                    role={t("fullstack")}
                    companyName={"GoIT"}
                    duration={t("ITCourses").charAt(0).toUpperCase() + t("ITCourses").slice(1)}
                    responsibilities={responsibilitiesArr}
                    aboutProject={t("inProgress")}
                    showImage={true}
                    showButton={true}
                    gitHubButtonProps={{
                        imgSrc: goITimg,
                        title: t("viewGoIT"),
                        gitHubLink: "https://html-m-lp-ua.goit.global"
                    }}
                />
            </div>
        </div>
    )
}

export default Courses