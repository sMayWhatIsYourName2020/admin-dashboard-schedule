import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ListProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  list: Array<string>;
  canAdd?: boolean;
  isOrderedList?: boolean;
}