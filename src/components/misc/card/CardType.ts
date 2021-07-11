import { ReactNode } from "react";
import { LinkType } from "../link";

export interface CardType {
    title?: LinkType;
    subtitle?: LinkType;
    body: ReactNode;
    header?: ReactNode;
    footer?: ReactNode;
    hideDivider?: boolean;
    className?: string; 
}