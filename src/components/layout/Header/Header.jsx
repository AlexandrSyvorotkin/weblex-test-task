import React from 'react';
import './Header.scss'
import Navbar from "../../Navbar/Navbar";
import Logo from "../../Logo/Logo";
import HeaderInfoBlock from "../../HeaderInfoBlock/HeaderInfoBlock";

const Header = () => {
    return (
        <header className='header'>
            <Logo/>
            <Navbar/>
            <HeaderInfoBlock/>
        </header>
    );
};

export default Header;