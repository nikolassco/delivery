import React from 'react';
import { Link } from 'react-router-dom';
import { usePedidoContext } from '../../../hooks/usePedidoContext';

import styles from './Pedido.module.css';

const Pedido = () => {
  const { pedido, priceTotal, handleRemoveItem } = usePedidoContext();

  return (
    <div className={styles.pedido}>
      <h1>Confira seu pedido aqui</h1>
      <h3>Escolha acima a quantidade e o sabor desejado e clique em confirmar</h3>
      {pedido && pedido.map((item, index) => (
        <div key={index} className={styles.list}>
          <p>{item.qtd} polpas de {item.flavor}</p>
          <button onClick={() => handleRemoveItem(item, index)}>REMOVER</button>
        </div>
      ))}
      <div className={styles.confirm}>
        <p>{priceTotal > 0 ? ` Preço total de R$: ${priceTotal.toFixed(2).replace('.', ',')}` : ""}</p>
        {priceTotal > 0 ? (
          <Link to="/endereco">CONTINUAR</Link>
        ) : ""}
      </div>
    </div>
  )
}

export default Pedido;
