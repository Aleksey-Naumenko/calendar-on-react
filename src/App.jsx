import React, { Component } from 'react';
import Header from './header/Header';
import Week from './week-bar/Week';
import Main from './main/Main';
import Popup from './popup/Popup';
import { getMonday, createDisplayedWeek } from './commonFunc';

class App extends Component {
    state = {
        firstDayOfWeek: getMonday(),
        popup: true,
        events: [
            {
                title: 'Lol1',
                dateFrom: new Date(2020, 2, 20, 2, 30),
                dateTo: new Date(2020, 2, 20, 3),
                description: 'Hello there',
                color: '#000',
                id: Math.random().toFixed(100)
            },
            {
                title: 'Lol2',
                dateFrom: new Date(2020, 2, 21, 1, 30),
                dateTo: new Date(2020, 2, 21, 2, 30),
                description: 'Hello there',
                color: '#000',
                id: Math.random().toFixed(100)
            },
            {
                title: 'Lol3',
                dateFrom: new Date(2020, 2, 22, 2, 30),
                dateTo: new Date(2020, 2, 22, 4),
                description: 'Hello there',
                color: '#000',
                id: Math.random().toFixed(100)
            },
            {
                title: 'Lol4',
                dateFrom: new Date(2020, 2, 24),
                dateTo: new Date(2020, 2, 24, 1),
                description: 'Hello there',
                color: '#000',
                id: Math.random().toFixed(100)
            },
            {
                title: 'Lol5',
                dateFrom: new Date(2020, 2, 20, 4, 30),
                dateTo: new Date(2020, 2, 20, 6),
                description: 'Hello there',
                color: '#000',
                id: Math.random().toFixed(100)
            },
        ]
    };

    todayBntSwitcher = () => {
        this.setState({
            firstDayOfWeek: getMonday(),
        })
    }

    weekSwitcherForward = () => {
        const firstDay = this.state.firstDayOfWeek;
        const day = firstDay.setDate(firstDay.getDate() + 7);

        this.setState({
            firstDayOfWeek: new Date(day),
        })
    }

    weekSwitcherBackward = () => {
        const firstDay = this.state.firstDayOfWeek;
        const day = firstDay.setDate(firstDay.getDate() - 7);

        this.setState({
            firstDayOfWeek: new Date(day),
        })
    }

    popupHandler = () => {
        this.setState({
            popup: true,
        })
    }

    hidePopupHandler = () => this.setState({ popup: false });

    render() {
        const week = createDisplayedWeek(this.state.firstDayOfWeek);

        return (
            <>
                <Header
                    week={week}
                    onCreateBtn={this.popupHandler}
                    onTodayBtnSwitcher={this.todayBntSwitcher}
                    onWeekSwitcherForward={this.weekSwitcherForward}
                    onWeekSwitcherBackward={this.weekSwitcherBackward} />
                <Week week={week} />
                <Main
                    week={week}
                    events={this.state.events}
                    onHourBarCreator={this.popupHandler} />
                <Popup 
                    isShown={this.state.popup}
                    onHide={this.hidePopupHandler} />
            </>
        );
    };
};

export default App;