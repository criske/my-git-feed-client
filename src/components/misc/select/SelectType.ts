export interface SelectType<T>{
    items: SelectEntryType<T>[];
    selected?: T;
    label?: string;
    onSelect: (item: T) => void;
}

export interface SelectEntryType<T> {
    value: T;
    display: string;
}