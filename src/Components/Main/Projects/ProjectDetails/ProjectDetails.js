import React from "react";
import './ProjectDetails.scss'
import { useTranslation } from 'react-i18next';

import GitHubButton from "../../../Buttons/GitHubButton/GitHubButton";

function ProjectDetails({ img, role, companyName, duration, responsibilities = [], aboutProject, showImage = true, showButton = false, gitHubButtonProps }) {
    const { t } = useTranslation();

    return (
        <div className="projectContainer">
            {showImage && (
                <div className="projectContainer__imgConteiner">
                    <img className="projectContainer__imgConteiner-img" src={img} alt="" />
                </div>
            )}
            <label className="projectContainer__role">{role}</label>
            <h2 className="projectContainer__name">{companyName}</h2>
            <label className="projectContainer__duration">{duration}</label>
            <span className="projectContainer__projTitle">{t("project")}</span>
            <label className="projectContainer__aboutProject">{aboutProject}</label>
            <ul className="projectContainer__responsibilities">
                {t("responsibilities")}
                {responsibilities.map((responsibility, index) => (
                    <li className="projectContainer__responsibilities-responsibiluty" key={index}>{responsibility}</li>
                ))}
            </ul>
            {showButton && (
                <div className="projectContainer__buttons">
                     <GitHubButton {...gitHubButtonProps} />
                </div>
            )}
        </div>
    );
}

export default ProjectDetails