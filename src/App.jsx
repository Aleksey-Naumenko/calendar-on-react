import React, { Component } from 'react';

import Header from './header/Header';
import Week from './week-bar/Week';
import Main from './main/Main';
// import Popup from './Pop-up';

class App extends Component {
    state = {
        daysOfWeek: [
            {
                day: 'Sun',
                date: 19,
                id: Math.random()
            },
            {
                day: 'Mon',
                date: 20,
                id: Math.random()
            },
            {
                day: 'Thu',
                date: 21,
                id: Math.random()
            },
        ]
    };

    render() {

        return (
            <>
                <Header />
                <Week week={this.state.daysOfWeek} />
                <Main week={this.state.daysOfWeek} />
                {/* <Popup /> */}
            </>
        );
    };
};

export default App;