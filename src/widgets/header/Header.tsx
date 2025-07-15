import { Container, Logo, Navigation } from '../../components';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <Logo />
        <Navigation />
      </Container>
    </header>
  );
};
