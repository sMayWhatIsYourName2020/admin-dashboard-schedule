import React from 'react';
import styles from './Card.module.scss'
import {CardProps} from './Card.props'
import cn from "classnames";

export const Card = ({height, width, className, children, ...props}: CardProps): JSX.Element => {
    return (
        <div className={cn(styles.Card, className, styles[height], styles[width])}
             {...props}>
            {children}
        </div>
    );
}