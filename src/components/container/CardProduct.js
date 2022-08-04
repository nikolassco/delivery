import React, { useState } from 'react';
import { usePedidoContext } from '../../hooks/usePedidoContext';

import styles from './CardProduct.module.css';

const CardProduct = ({ flavor, price }) => {
  const [qtd, setQtd] = useState(0);

  const { handleAddItem } = usePedidoContext();

  return (
    <div className={styles.container}>
      <p>{flavor.toUpperCase()}</p>
      <p>R$:{price.toFixed(2).replace('.', ',')}</p>
      <div className={styles.btn}>
        <button className="btn-confirm" onClick={(e) => {
          if (qtd > 0) {
            setQtd(qtd - 1)
          }
        }
        }>-</button>
        <button disabled className="btn-disable">{qtd}</button>
        <button className="btn-confirm" onClick={(e) => setQtd(qtd + 1)}>+</button>
        <button onClick={() => handleAddItem(qtd, flavor, price)}>ADICIONAR</button>
      </div>
    </div>
  )
}

export default CardProduct;
