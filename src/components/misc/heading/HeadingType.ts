export default interface HeadingType<T> {
    title: string,
    filter?: {
        name: string,
        values: [T],
        onSelect: (filter: T) => void
    }
    paging?: {
        max: number,
        current: number,
        onSelect: (page: number) => void
    }
}