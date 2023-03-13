import cn from "classnames";
import styles from "./CardBig.module.scss";
import { CardBigProps } from "./CardBig.props";
import { Text } from "../Text/Text";
import { List } from "../List/List";

export const CardBig = ({
  children,
  count,
  canAdd,
  list,
  headling,
  className,
  ...props
}: CardBigProps): JSX.Element => {
  const style = cn(styles.card, className);

  const infoColumnStyles = cn(styles["card-header-info-column"], "mb-35");

  return (
    <article {...props} className={style}>
      <div className={styles["card-header"]}>
        <div className={infoColumnStyles}>
          <Text className="mb-5" size="L">
            {count}
          </Text>
          <Text size="M" isDark={true}>
            {headling}
          </Text>
        </div>
      </div>
      <List list={list} />
    </article>
  );
};
