import { PtagProps } from './Ptag.props';
import styles from './Ptag.module.css';
import cn from 'classnames';

export const Ptag = ({ size = 'm', children }: PtagProps): JSX.Element => {
  switch (size) {
    case 's': 
      return <p className={styles.small}>{children}</p>;
    case 'm': 
      return <p  className={styles.medium}>{children}</p>;
    case 'l': 
      return <p className={styles.large}>{children}</p>;
      default: 
      return <></>;
  }
};