import React, { useState, useRef } from "react";

import { useNavigate } from "react-router-dom";

import axios from "axios";

import Logo from "../../assets/burger 1.png";

import { Container,
         Image,
         H1,
        InputLabel,
        Input,
        Button } from "./styles";

function Home() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  const inputName = useRef();
  const inputContact = useRef();
  const inputOrder = useRef();
  const inputAdress = useRef();
  const inputPayment = useRef();

  async function addNewOrder() {
    const { data: newOrder } = await axios.post("https://backend-orders.herokuapp.com/orders", {
      nameClient: inputName.current.value,
      nameContact: inputContact.current.value,
      order: inputOrder.current.value,
      adressClient: inputAdress.current.value,
      paymentForm: inputPayment.current.value
    });

    setOrders([...orders, newOrder]); 

    navigate("/finalizado")
  };

  return (
    <Container>
      <Image src={Logo} alt="logo" />
      <H1>FAÇA SEU PEDIDO !</H1>

      <InputLabel> Nome: </InputLabel>
      <Input ref={inputName} placeholder="Ex: João" required />

      <InputLabel> Telefone: </InputLabel>
      <Input ref={inputContact} placeholder="Ex: 21 987654321" required />

      <InputLabel> Pedido: </InputLabel>
      <Input ref={inputOrder} placeholder="Ex: X-tudo..." required />

      <InputLabel> Endereço: </InputLabel>
      <Input ref={inputAdress} placeholder="Ex: R.dos bobos n12..." required />

      <InputLabel> Forma de Pagamento: </InputLabel>
      <Input ref={inputPayment} placeholder="Ex: Dinheiro, Débito, Crédito..." required />

      <Button onClick={(addNewOrder)} >
         Finalizar Pedido
      </Button>
    </Container>
  );
}

/*
(node:9856) [DEP_WEBPACK_DEV_SERVER_ON_AFTER_SETUP_MIDDLEWARE] DeprecationWarning: 'onAfterSetupMiddleware' option is deprecated. Please use the 'setupMiddlewares' option.
(Use `node --trace-deprecation ...` to show where the warning was created)
(node:9856) [DEP_WEBPACK_DEV_SERVER_ON_BEFORE_SETUP_MIDDLEWARE] DeprecationWarning: 'onBeforeSetupMiddleware' option is deprecated. Please use the 'setupMiddlewares' option. 
*/

export default Home;
