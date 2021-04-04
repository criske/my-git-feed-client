import { useMemo } from 'react'
import './footer.css'

export default function Footer() {
    const year = new Date().getFullYear();
    const yearOutput = useMemo(() => {
        const startYear = 2021;
        let out: string;
        if (year > startYear) {
            out = `${startYear}-${year}`
        } else {
            out = startYear.toString()
        }
        return out;
    }, [year]);
    return (<footer><span>&copy; Copyright {yearOutput} Cristian Pela</span></footer>)
}