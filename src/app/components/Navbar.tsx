import React, { useState } from 'react';
import styles from '../styles/Navbar.module.css';

type Props = {
  children: React.ReactNode;
};

const Navbar = (props: Props) => {
  return <nav className={styles.nav}>{props.children}</nav>;
};

export default Navbar;
