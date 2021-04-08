import './card.css';

export function CardHeader({ title, subtitle }: { title: string, subtitle: string }) {
    return (
        <div className="__card-header-content">
            <strong>{title}</strong>
            <small>{subtitle}</small>
        </div>
    )
}

