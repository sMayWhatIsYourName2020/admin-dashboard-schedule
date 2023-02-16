import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  view?: 'standard' | 'link' | 'toggle' | 'wide';
  color?: 'primary' | 'default';
  children: ReactNode; 
}