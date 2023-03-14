import React, {createRef, LiHTMLAttributes, ReactNode, useEffect, useLayoutEffect, useRef, useState} from 'react';
import styles from './DropDown.module.scss'
import {DropDownProps} from './DropDown.props'
import cn from "classnames";
import {Text} from "../Text/Text";

export const DropDown = ({isTitleChangeable = false, obj, className, ...props}: DropDownProps): JSX.Element => {
    
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [item, setItem] = useState<string | number | null>();
    const [isSelected, setIsSelected] = useState<boolean>(false);
    
    const ref = useRef<HTMLInputElement>(null)
    const widthRef = useRef(null)
    const titleRef = useRef(null)
    // console.log(widthRef?.current?.clientWidth);
    
    useEffect(() => {
        const onClick = ({target}: MouseEvent) => !ref.current?.contains(target as Node) && setIsOpen(false);
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, []);
    
    const handleClickItem = (text: string | number) => {
        setIsOpen(false);
        setIsSelected(true)
        setItem(text);
    };
    
    return (
        <div className={styles.wrapper}>
            <div ref={ref} onClick={(e) => e.stopPropagation()} className={cn(className, styles.dropdown)}>
                <div onClick={() => setIsOpen(!isOpen)} className={styles.title}>
                    <Text ref={titleRef} className={cn(styles.text, {
                        [styles.isOpen]: isOpen
                    })} size={"S"}>{isSelected ? item : obj.title}</Text>
                    <img className={cn(styles.img, {
                        [styles.arrowUP]: isOpen
                    })} src="/arrow.svg" alt="arrow"/>
                </div>
                <ul className={styles.list}>
                    {obj.list.map((item) => (
                        <li ref={widthRef} key={item} onClick={() => handleClickItem(item)}
                            className={styles.item}>{item}</li>
                    ))}
                </ul>
            
            </div>
        </div>
    );
}


