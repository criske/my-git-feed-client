export interface CommitType {
    date: string;
    sha: string;
    url: string;
    message?: string;
    repo: {
        name: string;
        url: string;
    }
}