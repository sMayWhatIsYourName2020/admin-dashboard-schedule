import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface InputProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    placeholder?: string;
    isBorder?: boolean
    isSearch?: boolean
}
