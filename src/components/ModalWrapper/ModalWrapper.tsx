import React, {useState} from 'react';
import styles from './ModalWrapper.module.scss'
import {ModalWrapperProps} from './ModalWrapper.props'
import cn from "classnames";
import {Card} from "../Card/Card";
import {createPortal} from "react-dom";

export const ModalWrapper = ({width, height, children, className, ...props}: ModalWrapperProps): JSX.Element => {
    
    const [showModal, setShowModal] = useState<boolean>(false);
    
    document.onkeydown = (e: KeyboardEvent) => {
        if (e.key === "Escape" && showModal) {
            setShowModal(false)
        }
    }
    
    return (
        <>
            <button onClick={() => setShowModal(true)}>Нажать</button>
            {showModal && createPortal(
                (<div onClick={() => setShowModal(false)}
                      className={cn(styles.ModalWrapper, className)}>
                    <Card onClick={(e) => e.stopPropagation()} width={width} height={height}>
                        {children}
                    </Card>
                </div>), document.getElementById("modal")!
            )}
        </>
    )
}

