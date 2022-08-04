import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to='/'>Polpa <span className={styles.navbar_logo}>DiFruta</span></Link>
      <p>Peça Já</p>
    </div>
  )
}

export default Navbar;
