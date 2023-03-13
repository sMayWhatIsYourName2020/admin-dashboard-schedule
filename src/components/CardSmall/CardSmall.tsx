import cn from "classnames";
import styles from "./CardSmall.module.scss";
import { CardSmallProps } from "./CardSmall.props";
import { Text } from "../Text/Text";
import { List } from "../List/List";
import { Button } from "../Button/Button";

export const CardSmall = ({
  children,
  count,
  canAdd,
  list,
  headling,
  className,
  ...props
}: CardSmallProps): JSX.Element => {
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
        <div className="">
          <Button className="w-138 pr-8">
            <Text size="S">Смотреть все</Text>
          </Button>
        </div>
      </div>
      <List list={list} />
    </article>
  );
};
