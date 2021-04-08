import { Children, ReactChild, ReactChildren, ReactElement, ReactNode, useMemo } from 'react';
import './card.css';
import CardBody from './CardBody';
import { CardType } from './CardType';

import './card.css';
import { CardHeader } from './CardHeader';

export default function Card(props: CardType) {
    return (
        <div className="__card">

            { (props.header || props.title || props.subtitle) && <div className="__card-header">
                {
                    (props.title || props.subtitle && !props.header)
                        ? <CardHeader title={props.title || ""} subtitle={props.subtitle || ""} />
                        : props.header
                }
            </div>
            }
            <div className="__card-body">{props.body}</div>
            { props.footer && <div className="__card-footer">{props.footer}</div>}
        </div>
    )
}