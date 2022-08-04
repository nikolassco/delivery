import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Container from './components/container/Container';
import Pedido from './components/pages/pedido/Pedido';
import Navbar from './components/navbar/Navbar';
import Address from './components/pages/address/Address';
import ConfirmPedido from './components/pages/confirmpedido/ConfirmPedido';
import Footer from './components/footer/Footer';
import NotFound from './components/pages/notfound/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<><Container /><Pedido /></>} />
          <Route path="/endereco" element={<Address />} />
          <Route path="/comprar" element={<ConfirmPedido />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
