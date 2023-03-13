import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TextProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  size?: 'L' | 'M' | 'S';
  isDark?: boolean;
  children: ReactNode; 
}