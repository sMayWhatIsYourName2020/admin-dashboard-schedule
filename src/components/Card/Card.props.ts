import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  headling: string;
  count: number;
  // children: ReactNode;
  list: Array<string>;
  canAdd?: boolean;
}