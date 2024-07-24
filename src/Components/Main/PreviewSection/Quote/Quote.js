import React from "react";
import { useTranslation } from 'react-i18next';

import './Quote.scss'

function Quote() {
    const { t } = useTranslation()

    return (
        <section className="container">
            <div className="container__quote">
                <div className="container__quote-text">{t("quoteDrWho")}</div>
                <div className="container__quote-author">{t("DrWho")}</div>
            </div>
        </section>
    )
}

export default Quote