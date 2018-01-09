import React from 'react';
import { render } from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './containers/app/index'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './modules/index'

//store
let store = createStore(rootReducer);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
