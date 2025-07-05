import type { ReactNode } from 'react';
import styles from './Container.module.scss';
import clsx from 'clsx';

type MaxWidth = 'sm' | 'md' | 'lg' | 'full';

type Props = {
  children: ReactNode;
  className?: string;
  maxWidth?: MaxWidth;
};

export const Container = ({ children, className, maxWidth = 'lg' }: Props) => {
  return (
    <div className={clsx(styles.container, styles[maxWidth], className)}>
      {children}
    </div>
  );
};
