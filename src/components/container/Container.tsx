import type { ComponentPropsWithRef, ElementType, ReactNode } from 'react';
import styles from './Container.module.scss';
import clsx from 'clsx';

type MaxWidth = 'sm' | 'md' | 'ml' | 'lg' | 'full';

type Props<T extends ElementType = 'div'> = {
  as?: T;
  children: ReactNode;
  className?: string;
  maxWidth?: MaxWidth;
} & ComponentPropsWithRef<T>;

export const Container = <T extends ElementType = 'div'>({
  children,
  className,
  maxWidth = 'lg',
  as,
}: Props<T>) => {
  const Component = as || 'div';
  return (
    <Component className={clsx(styles.container, styles[maxWidth], className)}>
      {children}
    </Component>
  );
};
