import React from "react";
import './ContactMe.scss'
import { useTranslation } from 'react-i18next';

import EmailImg from '../../../../Assets/social/Email.svg'
import LinkedinImg from '../../../../Assets/social/Linkedin.svg'
import TelegramImg from '../../../../Assets/social/Telegram.svg'
import ContactLink from "./ContactLink/ContactLink";

function ContactMe() {
    const { t } = useTranslation();

    return (
        <div className="contactMeContainer">
            <h3 className="contactMeContainer__title">{t("messageME")}</h3>

            <ContactLink
                href="mailto:brv9473@gmail.com"
                imgSrc={EmailImg}
                alt="Email Icon"
                label="brv9473@gmail.com"
            />

            <ContactLink
                href="https://www.linkedin.com/in/rostyslav-bodnar-7747621b1/"
                imgSrc={LinkedinImg}
                alt="LinkedIn Icon"
                label="Rostyslav"
            />

            <ContactLink
                href="https://t.me/Rostik9473/266849"
                imgSrc={TelegramImg}
                alt="Telegram Icon"
                label="Rostik9473"
            />
        </div>
    );
}

export default ContactMe;