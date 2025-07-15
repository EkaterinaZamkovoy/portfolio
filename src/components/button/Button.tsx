import type { ComponentPropsWithRef } from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';

type Props = {
  variant?: 'colored' | 'empty' | 'rounded';
  fullWidth?: boolean;
} & ComponentPropsWithRef<'button'>;

export const Button = ({
  variant = 'empty',
  fullWidth,
  children,
  type = 'button',
  onClick,
  className,
  ...rest
}: Props) => {
  const viewStyles = {
    colored: styles.coloredButton,
    empty: styles.emptyButton,
    rounded: styles.roundedButton,
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(className, styles.button, viewStyles[variant])}
      {...rest}
    >
      {children}
    </button>
  );
};
