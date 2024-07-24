import React from "react";
import { Link } from 'react-router-dom';
import './SectionTitle.scss';
import { useTranslation } from 'react-i18next';

function SectionTitle({ title, viewAll, lineWidth, margin, useHash, subTitle }) {
    const { t } = useTranslation();

    const titleStyle = {
        ...(margin && { margin })
    };

    return (
        <div className="sectionTitle" style={titleStyle}>
            <h2 className="sectionTitle__title">
                <span className="sectionTitle__title-hash">{useHash}</span>
                {title}
            </h2>
            <div className="sectionTitle__line" style={{ width: lineWidth }}></div>
            {viewAll && viewAll.show && viewAll.path && (
                <Link to={viewAll.path} className="sectionTitle__viewAllLink">
                    {t("viewAll")} ~~>
                </Link>
            )}
            {subTitle && <h3 className="sectionTitle__subTitle">{subTitle}</h3>}
        </div>
    );
}

export default SectionTitle;
