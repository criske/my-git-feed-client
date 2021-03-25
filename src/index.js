import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NavBar from './nav/NavBar';
import { StateProvider } from './state/StateContext';
import NavBarController from './nav/NavBarController';

ReactDOM.render(
    <React.StrictMode>
        <App />
        {/* <StateProvider>
            <NavBarInteractor hasRounter={true} />
        </StateProvider> */}
    </React.StrictMode>,
    document.getElementById('root')
);
