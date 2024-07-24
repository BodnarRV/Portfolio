import React from 'react';
import './LanguageDropDown.scss';

function LanguageDropdown({ languages, selectedLanguage, onLanguageChange }) {
    return (
        <ul className="dropdown">
            {languages.map(lang => (
                <li key={lang.code} className={selectedLanguage === lang.code ? 'dropdown__selected' : ''}>
                    <a className='dropdown__selected-lng' onClick={() => onLanguageChange(lang.code)}>
                        {lang.label}
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default LanguageDropdown;