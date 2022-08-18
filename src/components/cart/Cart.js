import React from 'react';
import { Link } from 'react-router-dom';
import { usePedidoContext } from '../../hooks/usePedidoContext';
import styles from './Cart.module.css';

const Cart = () => {
  const { pedido, priceTotal } = usePedidoContext();

  return (
    <div className={styles.container}>
      <p>
        <Link to='/pedido'>{pedido && pedido.length > 1 ?
          (`${pedido.length} itens`) : (`${pedido.length} item`)}</Link>
      </p>
      <p>
        <Link to='/pedido'>R$ {priceTotal.toFixed(2).replace('.', ',')}</Link>
      </p>
      <p>
        <Link to='/endereco'>Finalizar Pedido</Link>
      </p>
    </div>
  )
}

export default Cart;
