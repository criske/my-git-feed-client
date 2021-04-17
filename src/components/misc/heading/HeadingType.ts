import { PagingType } from "./PagingType";

export default interface HeadingType<T> {
    title: string,
    filter?: {
        name: string,
        values: [T],
        onSelect: (filter: T) => void
    }
    paging?: PagingType
}