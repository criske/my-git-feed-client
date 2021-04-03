export interface RepoType {
    name: string;
    url: string;
    language: string;
    description? : string;
    organization?: string;
    createdAt: string;
    updatedAt: string;
    stars: number;
}