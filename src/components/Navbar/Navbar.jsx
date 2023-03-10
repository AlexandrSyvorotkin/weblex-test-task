import React from 'react';
import './Navbar.scss'

const nav_items = [
    {id: 1, title: 'Услуги'},
    {id: 2, title: 'Виджеты'},
    {id: 3, title: 'Интеграция'},
    {id: 4, title: 'Кейсы'},
    {id: 5, title: 'Сертификаты'},
]

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul className='nav_list'>
                {nav_items.map(it =>
                    <li key={it.id} className='nav_list_item'>
                        <a href="#">{it.title}</a>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;