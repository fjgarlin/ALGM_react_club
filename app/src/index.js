import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from "react-redux";
import { createStore } from 'redux'
import reducers from './reducers'

const initialState = {
    list: [],
    done: [],
};

const store = createStore(
    reducers, 
    initialState,
    window.__REDUX_DEV_TOOLS_EXTENSION__ && window.__REDUX_DEV_TOOLS_EXTENSION__()
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
registerServiceWorker();
