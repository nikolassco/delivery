import React from 'react';

import { productsList } from '../../../src/data/products';
import CardProduct from './CardProduct';


const Container = () => {
  return (
    <div>
      <h1>Faça seu pedido</h1>
      {productsList.map((product) => (
        <CardProduct key={product.id} id={product.id} flavor={product.flavor} price={product.price} />
      ))}
    </div>
  )
}

export default Container;
