import { ReactNode } from "react";

export interface SelectType<T> {
    items: T[];
    selected: T;
    onSelect: (item: T) => void;
    renderer?: SelectRenderer<T>
}

export enum SelectSection {
    HEAD, MENU
}

export type SelectRenderer<T> = (item: T, section: SelectSection) => ReactNode