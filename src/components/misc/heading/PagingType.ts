export interface PagingType {
    max: number,
    current: number,
    onSelect: (page: number) => void
}