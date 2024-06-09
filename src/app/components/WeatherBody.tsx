import React from 'react';
import styles from '../styles/WeatherBody.module.css';

type Props = {
  children: React.ReactNode;
};

const WeatherBody = (props: Props) => {
  return <section className={styles.section}>{props.children}</section>;
};

export default WeatherBody;
