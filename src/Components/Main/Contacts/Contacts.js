import React from "react";
import './Contacts.scss'
import { useTranslation } from 'react-i18next';

import SectionTitle from '../SectionTitle/SectionTitle'
import ContactMe from "./ContactMe/ContactMe";

function Contacts() {
    const { t } = useTranslation();

    return (
        <section className="container">
            <SectionTitle title={t("contacts")} lineWidth="20%" margin="112px 0 45px" useHash={"#"}/>
            <div className="container__contactsContent">
                <p className="container__contactsContent-text" dangerouslySetInnerHTML={{ __html: t("contactsText") }}></p>
                <ContactMe />
            </div>
        </section>
    )
}

export default Contacts