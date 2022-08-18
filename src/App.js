import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Container from './components/container/Container';
import Pedido from './pages/pedido/Pedido';
import Navbar from './components/navbar/Navbar';
import Address from './pages/address/Address';
import ConfirmPedido from './pages/confirmpedido/ConfirmPedido';
import Footer from './components/footer/Footer';
import NotFound from './pages/notfound/NotFound';
import { usePedidoContext } from './hooks/usePedidoContext';
import Cart from './components/cart/Cart';


function App() {
  const { pedido } = usePedidoContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/endereco" element={<Address />} />
          <Route path="/pedido" element={<Pedido />} />
          <Route path="/comprar" element={<ConfirmPedido />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        {pedido && pedido.length > 0 ? <Cart /> : ""}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
