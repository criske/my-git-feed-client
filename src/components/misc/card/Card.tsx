import React from 'react';
import './card.css';
import { CardType } from './CardType';
import { CardHeader } from './CardHeader';

export default function Card(props: React.PropsWithChildren<CardType>) {
    const divider = props.hideDivider ? "" : "__card-header-divider";
    return (
        <div className="__card-container">
            <div className={`__card ${props.className || ''}`}>

                {(props.header || props.title || props.subtitle) && <div className={`__card-header ${divider}`}>
                    {
                        ((props.title || props.subtitle) && !props.header)
                            ? <CardHeader title={props.title || ""} subtitle={props.subtitle || ""} />
                            : props.header
                    }
                </div>
                }
                <div className="__card-body">{props.body}</div>
                {props.footer && <div className="__card-footer">{props.footer}</div>}
            </div>
            {props.children}
        </div>

    )
}