import { SelectType } from "./SelectType";
import './select.css';

export default function Select<T>(select: SelectType<T>) {
    const handleChange = (e: any) => {
        if (e.detail === 0){ // take only when select option from dropdown, ignore when select the select component
            const valueByDisplay = select.items.find(item => item.display === e.target.value)?.value;
            valueByDisplay && select.onSelect(valueByDisplay);
        }
    }
    const selectedIndex = (select.selected && select.items.findIndex((item) => item.value === select.selected)) || 0;
    return (select.items.length > 0 && <select name={select.items[selectedIndex].display} onClick={handleChange}>
        {select.items.map((item, index) => <option key={index}>{item.display}</option>)}
    </select> || <></>);
}