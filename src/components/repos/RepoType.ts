import { LinkType } from "../misc/link";

export interface RepoType {
    name: LinkType;
    language: string;
    description? : string;
    organization?: string;
    createdAt: string;
    updatedAt: string;
    stars: number;
}