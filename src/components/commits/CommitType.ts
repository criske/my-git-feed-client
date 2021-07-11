import { LinkType } from "../misc/link";

export interface CommitType {
    date: string;
    sha: LinkType;
    message?: string;
    repo: LinkType
}