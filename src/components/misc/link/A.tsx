import { LinkTarget, LinkType } from "./LinkType";

export function A({ href: href }: { href: LinkType }) {
    if (typeof href === "string") {
        return (<>{href}</>);
    } else {
        const target = href.target || LinkTarget.BLANK;
        return (<a href={href.href}  target = {target}>{href.title}</a>)
    }
}
