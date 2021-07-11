export interface _LinkType {
    title: string;
    href: string;
    target?: LinkTarget;
}

export enum LinkTarget {
    BLANK = "_blank",
    SELF = "_self",
    PARENT = "_parent",
    TOP = "_top"
}

export type LinkType = string | _LinkType

export function simpleLink(url: string): LinkType{
    return {
        title: url,
        href: url
    }
}