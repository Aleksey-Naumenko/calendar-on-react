import React, { Component } from 'react';

import Header from './header/Header';
import Week from './week-bar/Week';
import Main from './main/Main';
import { getMonday } from './commonFunc';
import { createDisplayedWeek } from './commonFunc';

class App extends Component {
    state = {
        firstDayOfWeek: getMonday()
    };

    render() {
        const week = createDisplayedWeek(this.state.firstDayOfWeek);

        return (
            <>
                <Header 
                    week={week}
                    
                />
                <Week week={week} />
                <Main week={week} />
                {/* <Popup /> */}
            </>
        );
    };
};

export default App;