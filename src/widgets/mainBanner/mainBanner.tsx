import { Button, Container } from '../../components';
import styles from './mainBanner.module.scss';
import Typewriter from 'typewriter-effect';

export const MainBanner = () => {
  return (
    <Container as='section' className={styles.container}>
      <div className={styles.textBlock}>
        <div className={styles.titleBlock}>
          <h2 className={styles.title}>
            <Typewriter
              options={{
                strings: ['Frontend Developer'],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <h1 className={styles.myName}>Ekaterina Zamkovoy</h1>
        </div>
        <p className={styles.aboutMe}>
          I'm a Frontend Developer focused on building responsive, user-friendly
          web applications with React, TypeScript, and modern UI libraries. I
          enjoy turning complex ideas into clean, accessible interfaces and
          constantly improving my skills.
        </p>
        <div className={styles.buttonsBlock}>
          <Button variant='colored'>Projects</Button>
          <Button
            variant='empty'
            as='a'
            href='https://github.com/EkaterinaZamkovoy'
            target='_blanck'
          >
            GitHub
          </Button>
        </div>
      </div>
      <div className={styles.imgBlock}>
        <div className={styles.extraLayer}></div>
        <img src='/img/myFoto.png' alt='Екатерина Замковой' />
      </div>
    </Container>
  );
};
