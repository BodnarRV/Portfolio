import React from "react";
import './Footer.scss'
import { useTranslation } from 'react-i18next';

import Logo from "../Logo/Logo";
import ContactLink from "../Main/Contacts/ContactMe/ContactLink/ContactLink";

import GitHub from '../../Assets/social/Github.svg'
import Linkedin from '../../Assets/social/Linkedin.svg'
import Telegram from '../../Assets/social/Telegram.svg'

function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="container">
                <div className="container__about">
                    <Logo showEmail={true} />
                    <p className="container__about-text">{t("footerAboutText")}</p>
                </div>

                <div className="container__media">
                    <h3 className="container__media-title">{t("media")}</h3>
                    <div className="container__media-contacts">
                        <ContactLink href="https://github.com/BodnarRV" imgSrc={GitHub} />
                        <ContactLink href="https://www.linkedin.com/in/rostyslav-bodnar-7747621b1/" imgSrc={Linkedin} />
                        <ContactLink href="https://t.me/Rostik9473/266849" imgSrc={Telegram} />
                    </div>
                </div>
            </div>
            <p className="footer__copyright">&copy; Copyright 2024. Made by Rostyslav</p>
        </footer>
    )
}

export default Footer