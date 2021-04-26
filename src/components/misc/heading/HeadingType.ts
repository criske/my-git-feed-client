import { SelectType } from "../select";
import { PagingType } from "./PagingType";

export default interface HeadingType<T> {
    title: string,
    filter?: SelectType<T>,
    paging?: PagingType
}