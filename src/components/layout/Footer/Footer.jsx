import React from 'react';
import './Footer.scss'
import tg from "../../../assets/social_links/telegram.png";
import vb from "../../../assets/social_links/viber.png";
import wts from "../../../assets/social_links/whatsapp.png";

const footer_links = [
    {id: 1, title: 'О компании', links: ['Партнерская программа', 'Вакансии']},
    {id: 1, title: 'Меню', links: ['Расчет стоимости', 'Услуги', 'Виджеты', 'Интеграции', 'Наши клиенты']},
    {id: 1, title: 'dwa', links: ['Кейсы', 'Благодарственные письма', 'Сертификаты', 'Блог на Youtube', 'Вопрос / Ответ']},
]

const links = [
    {id: 1, img: tg},
    {id: 2, img: vb},
    {id: 3, img: wts},
]

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer_wrapper">
                <div className='footer_links'>
                    {footer_links.map(it =>
                        <div className='footer_link' key={it.id}>
                            <p className='footer_link_title'>{it.title}</p>
                            <ul className='footer_list_items'>
                                {it.links.map(it =>
                                    <li>{it}</li>
                                )}
                            </ul>
                        </div>
                    )}
                </div>
                <div className='contacts'>
                    <p className='contacts_title'>Контакты</p>
                    <div className='contact_items'>
                        <p>+7 555 555-55-55</p>
                        <div className='links_footer_container'>
                            {links.map(it =>
                                <div key={it.id}>
                                    <img src={it.img} alt=""/>
                                </div>
                            )}
                        </div>
                    </div>
                    <p>Москва, Путевой проезд 3с1, к 902</p>
                </div>
            </div>
            <div className='footer_rights'>
                <p>©WELBEX 2022. Все права защищены.</p>
                <p>Политика конфиденциальности</p>
            </div>
        </footer>
    );
};

export default Footer;