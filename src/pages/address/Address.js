import React, { useState } from 'react';
import styles from "./Address.module.css";
import { usePedidoContext } from '../../hooks/usePedidoContext';
import { useNavigate } from "react-router-dom";

const Address = () => {
  const { cliente, setCliente } = usePedidoContext();

  const [phone, setPhone] = useState(cliente ? cliente.phone : "");
  const [name, setName] = useState(cliente ? cliente.name : "");
  const [rua, setRua] = useState(cliente ? cliente.rua : "");
  const [numero, setNumero] = useState(cliente ? cliente.numero : "");
  const [bairro, setBairro] = useState(cliente ? cliente.bairro : "");
  const [referencia, setReferencia] = useState(cliente ? cliente.referencia : "");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setCliente({
      phone: phone,
      name: name,
      rua: rua,
      numero: numero,
      bairro: bairro,
      referencia: referencia
    })
    navigate("/comprar");
  }


  return (
    <div >
      <h1>Insira os dados para a entrega</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.label}>
          <label>
            <p>Telefone</p>
            <input type="text" name="phone" placeholder="(27)9xxxxxxxx" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </label>
          <label>
            <p>Nome</p>
            <input type="text" name="name" placeholder="Insira seu nome" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            <p>Rua</p>
            <input type="text" name="rua" placeholder="Insira a rua" value={rua} onChange={(e) => setRua(e.target.value)} />
          </label>
          <label>
            <p>Número da casa</p>
            <input type="text" name="numero" placeholder="Insira o numero" value={numero} onChange={(e) => setNumero(e.target.value)} />
          </label>
          <label>
            <p>Bairro</p>
            <input type="text" name="bairro" placeholder="Insira o bairro" value={bairro} onChange={(e) => setBairro(e.target.value)} />
          </label>
          <label>
            <p>Ponto de Referência</p>
            <input type="text" name="referencia" placeholder="Ponto de referencia" value={referencia} onChange={(e) => setReferencia(e.target.value)} />
          </label>
        </div>
        <div className={styles.submit}>
          <input type="submit" value="CONTINUAR" className='btn_submit' />
        </div>
      </form>
    </div>
  )
}

export default Address;
