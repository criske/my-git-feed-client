import { useContext } from 'react';
import { StateContext } from '../../state/StateContext';

const Home = () => {
    const {state} = useContext(StateContext);
    return (
        <div>Home</div>
    )
}

export default Home