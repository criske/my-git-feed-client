import './card.css';
import { A, LinkType } from '../link';

export function CardHeader({ title, subtitle }: { title: LinkType, subtitle: LinkType }) {
    return (
        <div className="__card-header-content">
            <div className="__card-header-content-title"><A href={title} /></div>
            <div className="__card-header-content-subtitle"><A href={subtitle} /></div>
        </div>
    )
}

