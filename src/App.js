import React, {Component} from 'react';
import './styles.js';
import Header from './common/header/index.js'
import store from './store/index';
import {Provider} from 'react-redux';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                {/*store 里面的state 提供给组件*/}
                <Header/>
            </Provider>
        );
    }
}

export default App;
