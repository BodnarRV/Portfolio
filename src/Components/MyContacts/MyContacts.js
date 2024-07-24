import React from "react";
import './MyContacts.scss'
import { useTranslation } from 'react-i18next';

import SectionTitle from "../Main/SectionTitle/SectionTitle";
import ContactMe from "../Main/Contacts/ContactMe/ContactMe";
// import ContactLink from "../Main/Contacts/ContactMe/ContactLink/ContactLink";

// import GitHub from '../../Assets/social/Github.svg'
// import Linkedin from '../../Assets/social/Linkedin.svg'
// import Telegram from '../../Assets/social/Telegram.svg'

function MyContacts() {
    const { t } = useTranslation();

    return (
        <section className="container">
            <SectionTitle title={t("contacts")} useHash={"/"} subTitle={t("letsTalk")} />

            <div className="container__contactsContent">
                <p className="container__contactsContent-text" dangerouslySetInnerHTML={{ __html: t("contactsText") }}></p>
                <ContactMe />
            </div>

            {/* <SectionTitle title={t("media").toLowerCase()} margin={"25px 0 0 0"} useHash={"#"} /> */}
            {/* <div className="container__medias">
                <ContactLink href="https://github.com/BodnarRV" imgSrc={GitHub} label={"BodnarRV"}/>
                <ContactLink href="https://www.linkedin.com/in/rostyslav-bodnar-7747621b1/" imgSrc={Linkedin} label={"@Rostyslav"}/>
                <ContactLink href="https://t.me/Rostik9473/266849" imgSrc={Telegram} label={"Rostuk9473"}/>
            </div> */}
        </section>
    )
}

export default MyContacts