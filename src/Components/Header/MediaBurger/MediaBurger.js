import React from 'react';
import './MediaBurger.scss';

const MediaBurger = ({ toggleMenu }) => (
    <div className='burger-menu' onClick={toggleMenu}>
        <div className='burger-menu__line burger-menu__line--top'></div>
        <div className='burger-menu__line burger-menu__line--bottom'></div>
    </div>
);

export default MediaBurger;