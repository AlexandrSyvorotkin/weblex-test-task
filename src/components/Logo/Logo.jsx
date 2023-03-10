import React from 'react';
import './Logo.scss'
import logo from '../../assets/logo/logo_welbex.png'

const Logo = () => {
    return (
        <div className='logo'>
            <div className='logo_item'>
                <img src={logo} alt=""/>
            </div>
            <p>крупный интегратор CR <br/> в Росcии и ещё 8 странах</p>
        </div>
    );
};

export default Logo;