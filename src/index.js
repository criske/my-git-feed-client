import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateProvider } from './state/StateContext';
import NavBarController from './components/nav/NavBarController';
import Splash from './components/Splash';

ReactDOM.render(
    <React.StrictMode>
        <App />
        {/* <StateProvider>
            <NavBarController hasRounter={true} />
        </StateProvider> */}
        {/* <Splash/> */}
    </React.StrictMode>,
    document.getElementById('root')
);
