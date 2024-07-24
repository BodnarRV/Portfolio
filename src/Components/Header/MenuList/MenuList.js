import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './MenuList.scss';
import LanguageDropdown from './LanguageDropDown/LanguageDropDown';
import { useTranslation } from 'react-i18next';
import MediaBurger from '../MediaBurger/MediaBurger';

function MenuList() {
    const { t, i18n } = useTranslation();
    const location = useLocation();

    const menuListItemsArray = [
        { path: "/", label: "home" },
        { path: "/projects", label: "works" },
        { path: "/about-me", label: "aboutMe" },
        { path: "/contacts", label: "contacts" },
        { path: "language", label: "language" }
    ];

    const languages = [
        { code: 'en', label: 'English' },
        { code: 'ua', label: 'Ukraine' },
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const currentIndex = menuListItemsArray.findIndex(item => item.path === location.pathname);
        setActiveIndex(currentIndex !== -1 ? currentIndex : 0);
    }, [location.pathname, menuListItemsArray]);

    const handleClick = (index) => {
        if (menuListItemsArray[index].path === "language") {
            setDropdownVisible(!dropdownVisible);
        }
        setActiveIndex(index);
    };

    const handleLanguageChange = (code) => {
        i18n.changeLanguage(code);
        setSelectedLanguage(code);
        setDropdownVisible(false);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownVisible(false);
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="menu-container">
            <MediaBurger toggleMenu={toggleMenu} />
            
            <ul className={`listItems ${isMenuOpen ? 'listItems--open' : ''}`}>
                {menuListItemsArray.map((item, index) => (
                    <li 
                        className={`listItems__item ${index === activeIndex ? 'active' : ''}`} 
                        key={index} 
                        ref={item.path === "language" ? dropdownRef : null}
                    >
                        {item.path === "language" ? (
                            <>
                                <a 
                                    className='listItems__item-link' 
                                    onClick={() => handleClick(index)}
                                >
                                    {selectedLanguage.toUpperCase()}
                                </a>
                                {dropdownVisible && (
                                    <LanguageDropdown
                                        languages={languages}
                                        selectedLanguage={selectedLanguage}
                                        onLanguageChange={handleLanguageChange}
                                    />
                                )}
                            </>
                        ) : (
                            <Link 
                                className='listItems__item-link' 
                                to={item.path} 
                                onClick={() => handleClick(index)}
                            >
                                <span className="listItems__item-hash">#</span>
                                {t(item.label)}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MenuList;
