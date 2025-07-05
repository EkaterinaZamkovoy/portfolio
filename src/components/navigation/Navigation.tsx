import styles from './Navigation.module.scss'

export const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <a href='/'>About</a>
      <a href='/'>Projects</a>
      <a href='/'>Contacts</a>
    </nav>
  );
};
