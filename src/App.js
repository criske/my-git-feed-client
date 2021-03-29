import React from 'react';
import { StateProvider } from './state/StateContext';
import StartUp from './components/startup/StartUp';
import Fetch from './components/Fetch';

function App() {
    return (
        <StateProvider>
            {/* <StartUp /> */}
            <Fetch isLoading={true}/>
        </StateProvider>
    );
}

export default App;
