import { ReactChild, ReactChildren } from 'react';
import './card.css';

export default function CardBody({ child }: { child: HTMLElement }) {
    return (<div className="__card-body">{child}</div>)
}