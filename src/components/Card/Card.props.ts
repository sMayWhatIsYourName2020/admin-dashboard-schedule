import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    width: "WM" | "WL";
    height: "HM" | "HL";
    children: ReactNode;
}
