import { useForm } from 'react-hook-form';
import { Button, Container, Title } from '../../components';
import styles from './FormWidget.module.scss';

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export const FormWidget = () => {
  const { register, handleSubmit, reset } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      const res = await fetch('https://formspree.io/f/xovlqplo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        reset();
      }
    } catch (error) {
      console.log('Сервер недоступен.');
    }
  };

  return (
    <Container as='section' className={styles.container}>
      <Title title='Contact me' />
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <label className={styles.label}>
          Name
          <input
            type='text'
            className={styles.input}
            {...register('name', { required: 'Name is required' })}
          />
        </label>
        <label className={styles.label}>
          Email
          <input
            type='email'
            className={styles.input}
            {...register('email', { required: 'Email is required' })}
          />
        </label>
        <label className={styles.label}>
          Message
          <textarea className={styles.textarea} {...register('message')} />
        </label>

        <Button type='submit' variant='colored'>
          Send
        </Button>
      </form>
    </Container>
  );
};
