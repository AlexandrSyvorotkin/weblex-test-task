import React from 'react';
import './PromoSection.scss'
import MainBtn from "../../UI/MainBtn/MainBtn";

const promo_items = [
    {id:1, title: 'Виджеты', text: '30 готовых решений'},
    {id:2, title: 'Dashboard', text: 'с показателями вашего бизнеса'},
    {id:3, title: 'Skype аудит', text: 'отдела продаж и CRM системы'},
    {id:4, title: '35 дней', text: 'использования CRM'},
]

const PromoSection = () => {
    return (
        <section className='promo'>
            <div className='promo_wrapper'>
                <div className='promo_info'>
                    <p>Зарабатывайте <br/> больше</p>
                    <p>с WELBEX</p>
                    <p>Развиваем и контролируем <br/> продажи за вас</p>
                </div>
                <div className='promo_information'>
                    <p>Вместе с <span>бесплатной <br/> консультацией</span> мы дарим:</p>
                    <div className='promo_items'>
                        {promo_items.map(it =>
                            <div className='promo_item' key={it.id}>
                                <p className='promo_title'>{it.title}</p>
                                <p className='promo_text'>{it.text}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className='btn_footer'>
                <MainBtn>Получить консультацию</MainBtn>
            </div>
        </section>
    );
};

export default PromoSection;