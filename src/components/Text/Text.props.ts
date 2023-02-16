import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TextProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  size?: 'XL' | 'L' | 'M' | 'S';
  children: ReactNode; 
}