import { StateProvider } from './state/StateContext';
import StartUp from './components/startup/StartUp';
import { FetchProvider } from './components/FetchContext';
import { UnderConstruction } from './components/misc/';
import { SelectType, Select } from './components/misc/select';

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
