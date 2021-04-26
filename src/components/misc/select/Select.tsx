import { SelectSection, SelectRenderer, SelectType } from "./SelectType";
import './select.css';
import { ReactNode, useEffect, useRef, useState } from "react";

function MenuItem<T>({ item, section, renderer, onSelect }: { item: T, section: SelectSection, renderer: SelectRenderer<T>, onSelect: (item: T) => void }) {
    const onClick = (e: any) => {
        e.preventDefault();
        onSelect(item)
    };
    return (
        <div className="__select-menu-item" onClick={onClick}>
            {renderer(item, section)}
        </div>
    );
}

function Menu<T>({ items, renderer, onSelect }: { items: T[], renderer: SelectRenderer<T>, onSelect: (item: T) => void }) {
    return (
        <div className="__select-menu-anchor">
            <div className="__select-menu">
                {items.map((item, index) => <MenuItem
                    key={index}
                    item={item}
                    section={SelectSection.MENU}
                    renderer={renderer}
                    onSelect={onSelect}
                />)}
            </div>
        </div>);
}

function Header<T>(props: { item: T, renderer: SelectRenderer<T>, onSelect: (item: T) => void }) {
    return (
        <div className="__select-menu-header">
            <MenuItem {...props} section={SelectSection.HEAD} />
        </div>
    );
}

export function SimpleSelectRenderer<T>(item: T): ReactNode {
    return (<div className="__select-simple-renderer">{item}</div>);
}

interface State<T> {
    selected: T,
    visible: boolean
}

export default function Select<T>(select: SelectType<T>) {
    const [state, setState] = useState<State<T>>({ selected: select.selected, visible: false });
    const renderer: SelectRenderer<T> = select.renderer || SimpleSelectRenderer;
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setState(prev => ({ ...prev, visible: false }));
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);

    return (select.items.length ?
        (
            <div className="__select-container" ref={ref} tabIndex={0}>
                <Header
                    item={state.selected}
                    renderer={renderer}
                    onSelect={() => { setState(prev => ({ ...prev, visible: !prev.visible })); }}
                />
                { state.visible &&
                    <Menu
                        items={select.items}
                        renderer={renderer}
                        onSelect={(item) => {
                                setState({ selected: item, visible: false });
                                select.onSelect(item);
                           }
                        }
                    />
                }
            </div>
        ) : <></>);
}