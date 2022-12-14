import React, { useState } from 'react';
import { usePedidoContext } from '../../hooks/usePedidoContext';
import Table from 'react-bootstrap/Table';
import imgMais from '../../images/mais.png';
import imgMenos from '../../images/menos.png';

import styles from './CardProduct.module.css';

const CardProduct = ({ flavor, price }) => {
  const { handleAddItem } = usePedidoContext();

  const [qtd, setQtd] = useState(0);

  function handleAddItemAndClean(qtd, flavor, price) {
    handleAddItem(qtd, flavor, price);
    setQtd(0);
  }

  return (
    <Table striped bordered hover className={styles.container}>
      <tbody>
        <tr>
          <td>
            <p>{flavor.toUpperCase()}</p>
            <p>R$ {price.toFixed(2).replace('.', ',')}</p>
          </td>
          <td>
            <button className={styles.button} onClick={(e) => {
              if (qtd > 0) {
                setQtd(qtd - 1)
              }
            }
            }><img src={imgMenos} alt="button menos" /></button>
          </td>
          <td>
            <p className="qtd-add">{qtd}</p>
          </td>
          <td>
            <button className={styles.button} onClick={(e) => setQtd(qtd + 1)}><img src={imgMais} alt="button mais" /></button>
          </td>
          <td>
            <button onClick={() => { if (qtd > 0) handleAddItemAndClean(qtd, flavor, price) }}>ADICIONAR</button>
          </td>
        </tr>
      </tbody>
    </Table>
  )
}

export default CardProduct;
