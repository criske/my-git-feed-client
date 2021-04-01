import { StateProvider } from './state/StateContext';
import StartUp from './components/startup/StartUp';
import { FetchProvider } from './components/FetchContext';
function App() {
    return (
        <StateProvider>
            <FetchProvider>
                <StartUp />
            </FetchProvider>
        </StateProvider>
    );
}

export default App;