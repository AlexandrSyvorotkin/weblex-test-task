import React from 'react';
import './HeaderInfoBlock.scss'
import tg from '../../assets/social_links/telegram.png'
import vb from '../../assets/social_links/viber.png'
import wts from '../../assets/social_links/whatsapp.png'

const links = [
    {id: 1, img: tg},
    {id: 2, img: vb},
    {id: 3, img: wts},
]

const HeaderInfoBlock = () => {
    return (
        <div className='header_info_block'>
            <p>+7 555 555-55-55</p>
            <div className='links'>
                {links.map(it =>
                    <div className='img_container' key={it.id}>
                        <img src={it.img} alt=""/>
                    </div>
                )}
            </div>

        </div>
    );
};

export default HeaderInfoBlock;