import { createContext, useState } from "react";

export const PedidoContext = createContext({});

export const PedidoContextProvider = ({ children }) => {
  const [pedido, setPedido] = useState([]);
  const [priceTotal, setPriceTotal] = useState(0);
  const [cliente, setCliente] = useState({});

  function handleAddItem(qtd, flavor, price) {
    const priceItem = (qtd * price);
    const items = { qtd, flavor, priceItem };
    if (pedido.find(item => item.flavor === items.flavor)) {
      pedido.find(item => item.flavor === items.flavor ? items.qtd += item.qtd : "");
      const filteredPedido = pedido.filter(item => item.flavor !== items.flavor);
      setPedido([...filteredPedido, items]);
    } else {
      setPedido([...pedido, items]);
    }
    setPriceTotal(priceTotal + (price * qtd));
  }

  function handleRemoveItem(item, index) {
    const filtrarPedido = pedido.filter(item => pedido.indexOf(item) !== index);
    setPedido(filtrarPedido);
    setPriceTotal(priceTotal - (item.priceItem * item.qtd));
  }

  return (
    <PedidoContext.Provider value={{ pedido, setPedido, handleAddItem, handleRemoveItem, priceTotal, cliente, setCliente }}>
      {children}
    </PedidoContext.Provider>
  )
}
