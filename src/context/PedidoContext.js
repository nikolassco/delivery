import { createContext, useState } from "react";

export const PedidoContext = createContext({});

export const PedidoContextProvider = ({ children }) => {
  const [pedido, setPedido] = useState([]);
  const [priceTotal, setPriceTotal] = useState(0);
  const [cliente, setCliente] = useState({});

  function handleAddItem(qtd, flavor, price) {
    const priceItem = (qtd * price)
    const items = { qtd, flavor, priceItem }
    if (qtd > 0) {
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
