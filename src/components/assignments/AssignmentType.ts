import { LinkTarget, LinkType } from "../misc/link";

export interface AssignmentType {
    title: LinkType;
    body: string;
    isOpen: boolean;
    repo: LinkType;
    author: {
        name: string;
        avatar?: string;
        url: string;
    }
}