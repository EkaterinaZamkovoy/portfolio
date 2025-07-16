import { Card, Container, Title } from '../../components';
import styles from './ProjectWidget.module.scss';

export const ProjectWidget = () => {
  return (
    <Container as='section' className={styles.container}>
      <Title title='Projects' />
      <Card
        title='AI Test'
        description='Прототип веб-интерфейса для онлайн-школы, в котором реализуется функционал ИИ-психодиагностики детей.'
        codeHref='https://github.com/EkaterinaZamkovoy/AI-test'
        projectHref='https://ai-test-1o4psf7cn-ekaterinas-projects-20bc28cd.vercel.app'
        rowReverse='row'
        imgSrc='/img/ai-test.webp'
      />
      <Card
        title='GIT Search'
        description='Приложение позволяет искать репозитории на GitHub по имени пользователя, загружая данные через API GitHub.'
        codeHref='https://github.com/EkaterinaZamkovoy/git-search'
        projectHref='https://ekaterinazamkovoy.github.io/git-search/'
        rowReverse='row-reverse'
        imgSrc='/img/github.png'
      />
      <Card
        title='Sarawan Delivery'
        description='Sarawan — интерфейс сервиса курьерской доставки: оформление заказа, расчёт стоимости, отслеживание. Реализовано на React, Next.js, TypeScript, Redux Toolkit и React Hook Form.'
        codeHref=''
        projectHref='https://sarawan.ru/'
        rowReverse='row'
        imgSrc='/img/sarawan.png'
      />
    </Container>
  );
};
