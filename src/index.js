import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import store from "./stores/index";

ReactDOM.render( 
    <Provider store={store}>
        <App />
    </Provider>
    ,document.getElementById('root'));
registerServiceWorker();
