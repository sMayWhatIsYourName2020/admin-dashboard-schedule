import cn from "classnames";
import styles from "./Button.module.scss";
import {ButtonProps} from "./Button.props";

export function Button({
                           children,
                           view = "standard",
                           color = "default",
                           isArrow = false,
                           className,
                           ...props
                       }: ButtonProps): JSX.Element {
    const style = cn(styles.button, className, styles[view], styles[color]);
    
    return (
        <button {...props} className={style}>
            {children}
            {isArrow && <img src="/arrow.svg" alt="arrow"/>}
        </button>
    );
}
