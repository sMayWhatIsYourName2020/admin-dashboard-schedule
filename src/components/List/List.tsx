import cn from 'classnames';
import styles from './List.module.scss';
import { ListProps } from './List.props';
import { Text } from '../Text/Text';

export function List({ children, list, isOrderedList, canAdd, className, ...props } : ListProps): JSX.Element {

  return (
    <ul className={styles.list}>
      {list.map((val, i) => (
          <li className={styles['list-item']}>
            {isOrderedList ? <Text className="mr-8" isDark={true}>{i}.</Text> : null}
            <Text>{val}</Text>
          </li>
        ))}
    </ul>
  )
}