import { Container, Title } from '../../components';
import styles from './SkillsWidget.module.scss';

export const SkillsWidget = () => {
  const skills = [
    'vscode',
    'js',
    'css',
    'html',
    'vite',
    'redux',
    'github',
    'git',
    'react',
    'nextjs',
    'sass',
    'tailwind',
  ];

  return (
    <Container as='section' className={styles.comtainer}>
      <Title title='Skills' />
      <div className={styles.skillsComtainer}>
        {skills.map((skill) => (
          <div key={skill} className={styles.skill}>
            <img src={`/icons/${skill}.svg`} alt={skill} />
          </div>
        ))}
      </div>
    </Container>
  );
};
