import React from 'react';
import { render } from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './containers/app/index'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './modules/index'
import thunkMiddleware from 'redux-thunk'

//store
let store = createStore(rootReducer,applyMiddleware(thunkMiddleware));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
