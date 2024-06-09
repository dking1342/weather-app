import React from 'react';
import styles from '../styles/Welcome.module.css';

type Props = {
  children: React.ReactNode;
};

const Welcome = (props: Props) => {
  return <div className={styles.container}>{props.children}</div>;
};

export default Welcome;
