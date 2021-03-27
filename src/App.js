import React from 'react';
import { StateProvider } from './state/StateContext';
import StartUp from './nav/StartUp';

function App() {
    return (
        <StateProvider>
            <StartUp />
        </StateProvider>
    );
}

export default App;
