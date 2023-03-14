import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface DropDownProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    obj: {
        title: string
        list: (string)[]
    }
    isTitleChangeable?: boolean
}

