import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink to='/'>Polpa <span className={styles.navbar_logo}>DiFruta</span></NavLink>
    </nav>
  )
}

export default Navbar;
