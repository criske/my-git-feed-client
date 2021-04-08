import './card.css';

export function CardHeader({ title, subtitle}: { title: string, subtitle: string }) {
    return (
        <div className="__card-header-content">
            <div className="__card-header-content-title">{title}</div>
            <div className="__card-header-content-subtitle">{subtitle}</div>
        </div>
    )
}

