import React from 'react';
import './header.scss';

// import { switchWeekForward, switchWeekBackward } from '../commonFunc';

const Header = ({ week }) => {
    return (
        <header className="header">
            <div className="header__button_create">
                <i className="fas fa-plus"></i>
                Create
            </div>
            <button className="header__button_today">Today</button>
            <div className="header__week-toggle">
                <span 
                    className="header__week-toggle_chevron-left">
                    <i className="fas fa-chevron-left chevron"></i>
                </span>
                <span 
                    className="header__week-toggle_chevron-right">
                    <i className="fas fa-chevron-right chevron"></i>
                </span>
            </div>
            <span className="header__current-month-year">Feb 2020</span>

        </header>
    );
};

export default Header;

