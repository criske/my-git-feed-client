import { useContext } from "react"
import Fetch from "./Fetch";
import { FetchContext } from "./FetchContext";

export default function FetchController() {
    const fetchContext = useContext(FetchContext);
    return (<Fetch {...fetchContext} />);
}