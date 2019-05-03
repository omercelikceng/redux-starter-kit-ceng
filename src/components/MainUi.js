import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from '../store/ConfigureStore';
import Sayac from '../components/Sayac';

const store = configureStore();


class MainUi extends Component{

    render() {
        return (
            <Provider store={store}>
               <Sayac/>
            </Provider>
        );
    }
}

export default MainUi;