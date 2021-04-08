import { ReactChildren, ReactNode } from "react";

export interface CardType {
    title?: string;
    subtitle?: string;
    body: ReactNode;
    header?: ReactNode;
    footer?: ReactNode;
    children?: [];
}