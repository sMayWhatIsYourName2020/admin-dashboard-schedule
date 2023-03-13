import cn from "classnames";
import styles from "./Button.module.scss";
import { ButtonProps } from "./Button.props";

export function Button({
  children,
  view = "standard",
  color = "default",
  className,
  ...props
}: ButtonProps): JSX.Element {
  const style = cn(styles.button, className, styles[view], styles[color]);

  return (
    <button {...props} className={style}>
      {children}
      <img src="public/arrow.svg" alt="" />
    </button>
  );
}
