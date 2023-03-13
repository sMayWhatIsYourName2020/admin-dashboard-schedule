import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface CardSmallProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  headling: string;
  count: number;
  // children: ReactNode;
  list: Array<string>;
  canAdd?: boolean;
}