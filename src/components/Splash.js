import { useContext, useEffect } from "react"
import { BASE_API } from '../state/State'
import { StateContext } from "../state/StateContext";

export default function Splash() {
    const { dispatchers } = useContext(StateContext)
    useEffect(() => {
        // fetch(`${BASE_API}/check/api`)
        //     .then(dispatchers.ready)
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     });
        setTimeout(dispatchers.ready, 5000);
    })

    return (
        <div>Waking up the server</div>
    )
}