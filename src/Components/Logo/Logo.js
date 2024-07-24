import React from "react";
import './Logo.scss'
import { useTranslation } from 'react-i18next';

import LogoImg from "../../Assets/social/Logo.png"
import ContactLink from "../Main/Contacts/ContactMe/ContactLink/ContactLink";


function Logo({ showEmail }) {
    const { t } = useTranslation();

    return (
        <a className='containerLogo'>
            <img className='containerLogo__image' src={LogoImg}></img>
            <span className='containerLogo__text'>{t('name')}</span>
            {showEmail &&
                <ContactLink
                    href="mailto:brv9473@gmail.com"
                    alt="Email Icon"
                    label="brv9473@gmail.com"
                />}
        </a>
    )
}

export default Logo