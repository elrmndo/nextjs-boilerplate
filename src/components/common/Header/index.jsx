import cn from 'classnames';
import styles from './header.module.scss';

export function Header({ size }) {
  return (
    <>
      <h1
        className={cn(styles.header, {
          [styles['header--large']]: size === 'lg',
        })}
      >
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
    </>
  );
}