import { useCallback, useEffect, useLayoutEffect, useRef, useState} from 'react';
import styles from './DropDown.module.scss'
import {DropDownProps} from './DropDown.props'
import cn from "classnames";
import {Text} from "../Text/Text";

export const DropDown = ({ obj, className, ...props }: DropDownProps): JSX.Element => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [content, setContent] = useState(obj.title);
    
    const [width, setWidth] = useState(0);
    const refList = useRef<HTMLUListElement>(null);
    useLayoutEffect(() => {
        if (refList.current) {
            setWidth(refList.current.offsetWidth);
        }
    }, []);
    
    const onClick = useCallback(() => setIsOpen(false), []);

    useEffect(() => {
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, []);

    
    const handleClickItem = useCallback((text: string) => {
        setIsOpen(false);
        setContent(text);
    }, []);
    
    return (
        <div onClick={(e) => e.stopPropagation()} className={cn(className, styles.dropdown)} {...props}>
            <div style={{
                    width
                }} onClick={() => setIsOpen(!isOpen)} className={styles.title}>
                    <Text className={cn(styles.text, {
                        [styles.isOpen]: isOpen
                    })} size={"S"}>{content}</Text>
                    <img className={cn(styles.img, {
                        [styles.arrowUP]: isOpen
                    })} src="/arrow.svg" alt="arrow"/>
                </div>
                <ul ref={refList} className={cn(styles.list, {
                    [styles.hidden]: !isOpen
                })}>
                    {obj.list.map((item) => (
                        <li key={item} onClick={() => handleClickItem(item)}
                            className={styles.item}>{item}</li>
                    ))}
                </ul>
            
            </div>
    );
}


