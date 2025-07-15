import type { ComponentPropsWithRef } from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';

type Props = {
  as?: 'button' | 'a';
  variant?: 'colored' | 'empty' | 'rounded';
  fullWidth?: boolean;
} & ComponentPropsWithRef<'button'> &
  ComponentPropsWithRef<'a'>;

export const Button = ({
  as = 'button',
  variant = 'empty',
  fullWidth,
  children,
  type = 'button',
  onClick,
  className,
  href,
  ...rest
}: Props) => {
  const viewStyles = {
    colored: styles.coloredButton,
    empty: styles.emptyButton,
    rounded: styles.roundedButton,
  };

  return (
    <>
      {as === 'a' ? (
        <a
          href={href}
          className={clsx(className, styles.button, viewStyles[variant])}
          {...rest}
        >
          {children}
        </a>
      ) : (
        <button
          type={type}
          onClick={onClick}
          className={clsx(className, styles.button, viewStyles[variant])}
          {...rest}
        >
          {children}
        </button>
      )}
    </>
  );
};
