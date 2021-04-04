export interface AssignmentType {
    title: string;
    body: string;
    url: string;
    isOpen: boolean;
    repo: {
        name: string;
        url: string;
    };
    author: {
        name: string;
        avatar?: string;
        url: string;
    }
}