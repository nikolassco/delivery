import React, { useState } from 'react';
import { usePedidoContext } from '../../hooks/usePedidoContext';
import Table from 'react-bootstrap/Table';

import styles from './CardProduct.module.css';

const CardProduct = ({ flavor, price }) => {
  const [qtd, setQtd] = useState(0);

  const { handleAddItem } = usePedidoContext();

  return (
    <Table striped bordered hover className={styles.container}>
      <tbody>
        <tr>
          <td>
            <p>{flavor.toUpperCase()}</p>
            <p>R$:{price.toFixed(2).replace('.', ',')}</p>
          </td>
          <td>
            <button className="btn-remove" onClick={(e) => {
              if (qtd > 0) {
                setQtd(qtd - 1)
              }
            }
            }>-</button>
          </td>
          <td>
            <button disabled className="btn-disable">{qtd}</button>
          </td>
          <td>
            <button className="btn-confirm" onClick={(e) => setQtd(qtd + 1)}>+</button>
          </td>
          <td>
            <button onClick={() => { if (qtd > 0) handleAddItem(qtd, flavor, price) }}>ADICIONAR</button>
          </td>
        </tr>
      </tbody>
    </Table>
  )
}

export default CardProduct;
