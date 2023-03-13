import React from 'react';
import styles from './Draft.module.scss'
import {DraftProps} from './Draft.props'
import cn from "classnames";
import {Card, ModalWrapper} from "../../components";

export const Draft = ({className, ...props}: DraftProps): JSX.Element => {
    return (
        <div className={cn(styles.Draft, className)}
             {...props}>
            <ModalWrapper height={"HL"} width={"WL"}>
            </ModalWrapper>
        </div>
    );
}