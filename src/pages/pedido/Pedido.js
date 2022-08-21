import React from 'react';
import { Link } from 'react-router-dom';
import { usePedidoContext } from '../../hooks/usePedidoContext';

import styles from './Pedido.module.css';

const Pedido = () => {
  const { pedido, priceTotal, handleRemoveItem } = usePedidoContext();

  return (
    <div className={styles.pedido}>
      {pedido && pedido.length !== 0 ? (
        <div className={styles.seta}>
          <Link to="/">&larr; CONTINUAR PEDIDO</Link>
        </div>) : ""}
      <h1>Carrinho de compras</h1>
      {pedido && pedido.length === 0 ? (
        <div className={styles.pedidozerado}>
          <p>Você ainda não escolheu nenhum item</p>
          <p>Faça seu pedido</p>
          <div className={styles.confirm}>
            <Link to="/">PEDIR</Link>
          </div>
        </div>
      ) : pedido.map((item, index) => (
        <div key={index} className={styles.list}>
          <p>{item.qtd} polpa(s) de {item.flavor}</p>
          <button onClick={() => handleRemoveItem(item, index)}>REMOVER</button>
        </div>
      ))
      }
      <div className={styles.confirm}>
        <p>{priceTotal > 0 ? ` Preço total de R$ ${priceTotal.toFixed(2).replace('.', ',')}` : ""}</p>
        {priceTotal > 0 ? (
          <Link to="/endereco">CONTINUAR</Link>
        ) : ""}
      </div>
    </div >
  )
}

export default Pedido;
