import { Button } from '../button';
import { Container } from '../container';
import styles from './Card.module.scss';

type Props = {
  title: string;
  description: string;
  codeHref?: string;
  projectHref: string;
  imgSrc: string;
  rowReverse: 'row' | 'row-reverse';
};

export const Card = ({
  title,
  description,
  codeHref,
  projectHref,
  imgSrc,
  rowReverse,
}: Props) => {
  return (
    <Container
      as='article'
      maxWidth='ml'
      className={`${styles.container} ${
        rowReverse === 'row-reverse' ? styles.reverse : styles.row
      }`}
      defaultPadding='withoutPaddings'
    >
      <div className={styles.textContainer}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.buttonsContainer}>
          <Button
            as='a'
            variant='rounded'
            href={`${projectHref}`}
            target='_blank'
          >
            View Project
          </Button>
          {!!codeHref ? (
            <Button
              as='a'
              variant='rounded'
              href={`${codeHref}`}
              target='_blank'
            >
              Code
            </Button>
          ) : null}
        </div>
      </div>
      <div
        className={`${styles.imgContainer} ${
          rowReverse === 'row-reverse'
            ? styles.reverseBorderRadius
            : styles.rowBorderRadius
        }`}
      >
        <img src={`${imgSrc}`} alt='project' />
      </div>
    </Container>
  );
};
