import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
        <Provider store = {store}>
            {/*она использует context API, чтобы засунуть в контекст этот стор,*/}
            {/*чтобы дочерные компоненты App могли до него достучаться =  достучаются через Consumers*/}
        <App />
            {/*state={state} store = {store} dispatch={store.dispatch.bind(store)}*/}
        </Provider>
        </React.StrictMode>
  );

  window.store=store;

// let rerenderEntireTree = (state) =>{

// rerenderEntireTree(store.getState());

// store.subscribe( () => {
//     let state = store.getState();
//     rerenderEntireTree(state);
// });



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
