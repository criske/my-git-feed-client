import HeadingType from "./HeadingType";
import './heading.css';
import { useState } from "react";


function Pages(paging: { current: number, max: number, onSelect: (page: number) => void }) {

    const onClick = (page: number) => () => {
        if(page >= 1 && page <= paging.max){
            paging.onSelect(page);
        } 
    }

    return (<div className="__heading-pages">
        <div className="__heading-pages-button" onClick={onClick(1)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
        </div>
        <div className="__heading-pages-button" onClick={onClick(paging.current - 1)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
        </div>
        <div className="__heading-pages-current">{paging.current}</div>
        <div className="__heading-pages-button" onClick={onClick(paging.current + 1)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
        </div>
        <div className="__heading-pages-button" onClick={onClick(paging.max)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
        </div>
    </div>)
}

export function HeadingTest() {
    const [paging, setPaging] = useState<{ current: number, max: number }>({
        current: 10,
        max: 100
    });

    const onSelect = (page: number) => {
        setPaging((prev) => ({
            ...prev, current: page
        }));
    };
    return <Heading title="Test" paging={{ ...paging, onSelect }}></Heading>
}

export default function Heading<T>(heading: HeadingType<T>) {
    const showPaging = heading.paging ? heading.paging.max > 1 : false;
    return (
        <div className="__heading-container">
            <h2>{heading.title}</h2>
            {heading.filter && <div className="__heading-filter">Filter</div>}
            { showPaging ? heading.paging && <Pages {...heading.paging} /> : <></>}
        </div>
    );
}