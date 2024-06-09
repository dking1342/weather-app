import React from 'react';
import styles from '../styles/ErrorPage.module.css';

type Props = {};

const ErrorPage = (props: Props) => {
  return (
    <section className={styles.errorContainer}>
      <p>Unable to find the city</p>
      <p>Please try again</p>
    </section>
  );
};

export default ErrorPage;
