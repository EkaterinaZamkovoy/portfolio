import styles from './Title.module.scss';

type Props = {
  title: string;
};

export const Title = ({ title }: Props) => {
  return <h2 className={styles.title}>{title}</h2>;
};
