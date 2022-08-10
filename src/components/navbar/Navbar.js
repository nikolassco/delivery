import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import { usePedidoContext } from '../../hooks/usePedidoContext';


const Navbar = () => {
  const { pedido } = usePedidoContext();
  return (
    <nav className={styles.navbar}>
      <NavLink to='/'>Polpa <span className={styles.navbar_logo}>DiFruta</span></NavLink>
      <NavLink to='/pedido'>Ver Pedido <span className={styles.navbar_qtd_itens}>{pedido.length}</span></NavLink>
    </nav>
  )
}

export default Navbar;
