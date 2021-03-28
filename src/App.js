import React from 'react';
import { StateProvider } from './state/StateContext';
import StartUp from './components/startup/StartUp';

function App() {
    return (
        <StateProvider>
            <StartUp />
        </StateProvider>
    );
}

export default App;
