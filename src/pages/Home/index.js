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
  const inputOrder = useRef();
  const inputAdress = useRef();

  async function addNewOrder() {
    const { data: newOrder } = await axios.post("https://git.heroku.com/backend-orders.git/orders", {
      nameClient: inputName.current.value,
      order: inputOrder.current.value,
      adressClient: inputAdress.current.value,
    });

    setOrders([...orders, newOrder]); 

    navigate("/pedidos")
  }

  return (
    <Container>
      <Image src={Logo} alt="logo" />
      <H1>Faça seu pedido!</H1>

      <InputLabel> Nome: </InputLabel>
      <Input ref={inputName} placeholder="Nome" required />

      <InputLabel> Pedido: </InputLabel>
      <Input ref={inputOrder} placeholder="Pedido" required />

      <InputLabel> Endereço: </InputLabel>
      <Input ref={inputAdress} placeholder="Endereço" required />

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
