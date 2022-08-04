import { useContext } from "react";
import { PedidoContext } from "../context/PedidoContext";

export const usePedidoContext = () => {
  const pedido = useContext(PedidoContext);

  return pedido;
}
