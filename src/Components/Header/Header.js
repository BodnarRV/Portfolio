import React from 'react';
import './Header.scss'

import MenuList from './MenuList/MenuList'
import Logo from '../Logo/Logo';

function Header() {
    return (
        <header>
            <div className='container'>
                <Logo />
                <MenuList />
            </div>
        </header>
    )
}

export default Header