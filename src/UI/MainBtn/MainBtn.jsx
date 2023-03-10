import React from 'react';
import './MainBtn.scss'

const MainBtn = ({children, onClick}) => {
    return (
        <button onClick={onClick} className='main_btn'>
            {children}
        </button>
    );
};

export default MainBtn;