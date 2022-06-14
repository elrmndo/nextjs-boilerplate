import cn from 'classnames';
import styles from './header.module.scss';

type Props = {
  size: 'lg' | 'sm';
};

export function Header({ size }: Props) {
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
