import { Container, Logo, Navigation } from '../../components';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <Container className={styles.container}>
      <Logo />
      <Navigation />
    </Container>
  );
};
