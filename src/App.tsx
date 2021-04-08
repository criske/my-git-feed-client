import { StateProvider } from './state/StateContext';
import StartUp from './components/startup/StartUp';
import { FetchProvider } from './components/FetchContext';
import { UnderConstruction } from './components/misc/';
import { Card } from './components/misc/card';
function App() {
    return (
        <StateProvider>
            {/* <FetchProvider>
                <StartUp />
                <UnderConstruction/>
            </FetchProvider> */}
            <Card
                title="Card title"
                subtitle = "Card subtitle"
                header={<h3>Custom header</h3>}
                body={<div>Hello World</div>}
                footer = {<>My footer</>}
            >
            </Card>
        </StateProvider>
    );
}

export default App;