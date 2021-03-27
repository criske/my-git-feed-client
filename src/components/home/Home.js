import { useContext } from 'react';
import { StateContext } from '../../state/StateContext';

const Home = () => {
    const {state} = useContext(StateContext);
    return (
        <div>{state.pages.selected}</div>
    )
}

export default Home