import { StateProvider } from './state/StateContext';
import StartUp from './components/startup/StartUp';
import { FetchProvider } from './components/FetchContext';
import { UnderConstruction } from './components/misc/';
function App() {
    return (
        <StateProvider>
            <FetchProvider>
                <StartUp />
                <UnderConstruction/>
            </FetchProvider>
        </StateProvider>
    );
}

export default App;