import React from 'react';
import { usePedidoContext } from '../../hooks/usePedidoContext';

const ConfirmPedido = () => {
  const { pedido, cliente, priceTotal } = usePedidoContext();

  const pularLinha = "                                                                                                    "; // 100 espaços

  // const urlPedido = "https://api.whatsapp.com/send?phone=5527988111598&text=texto%20de%20teste";

  // url sem texto https://api.whatsapp.com/send?phone=5527988111598

  const stringPedido = JSON.stringify(pedido);


  const textoPedido = stringPedido.replace(/}/g, ` reais ${pularLinha}`).replace("[", "").replace("]", "").replace(/,/g, "").replace(/{"qtd":/g, "").replace(/"flavor":/g, " polpa(s) de ").replace(/"/g, "").replace(/priceItem:/g, " - ");

  //  usei 80 espaços

  // const stringCliente = JSON.stringify(cliente);

  // const textoCliente = stringCliente.replace(/{"phone":"/g, "Telefone ").replace(/","name":"/, " nome ").replace(/","rua":"/, "\n Rua ").replace(/","numero":"/, " nº ").replace(/","bairro":"/, ", bairro ").replace(/","referencia":"/, " ponto de referência(se houver) ").replace(/"}/, "");

  console.log(textoPedido)
  // console.log(textoCliente)

  const textoTopo = `POLPA DELIVERY ${pularLinha}Meu nome é ${cliente.name}, contato ${cliente.phone} ${pularLinha}Meu pedido é: ${pularLinha}`;

  const textoFim = `${pularLinha}Valor total: ${priceTotal} reais ${pularLinha} ${pularLinha}Endereço da Entrega ${pularLinha}Rua: ${cliente.rua} ${pularLinha}Número: ${cliente.numero} ${pularLinha}Bairro: ${cliente.bairro} ${pularLinha}Referência: ${cliente.referencia}`;

  const url = `https://api.whatsapp.com/send?phone=5527988111598&text=${textoTopo + textoPedido + textoFim}`;

  console.log(url);

  return (
    <div>
      <h1>Confira seu pedido</h1>
      {pedido && pedido.map((item, index) => (
        <h3 key={index}>{item.qtd} polpas de {item.flavor}</h3>
      ))}
      <p>Valor total de {priceTotal} reais</p>

      <button className='btn_submit'>
        <a href={url}>PEDIR</a>
      </button>
    </div>
  )
}

export default ConfirmPedido
