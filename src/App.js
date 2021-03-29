import React from 'react';
import { StateProvider } from './state/StateContext';
// import StartUp from './components/startup/StartUp';
import Fetch, { FetchTest } from './components/Fetch';

function App() {
    return (
        <StateProvider>
            {/* <StartUp /> */}
            <FetchTest />
        </StateProvider>
    );
}

export default App;
