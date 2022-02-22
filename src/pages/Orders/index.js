import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import axios from "axios";

import BagOrders from "../../assets/burger (1) 1.png";

import Trasher from "../../assets/trasher.svg";

import{
    Container,
    Image,
    H1,
    Order,
    Button
} from "./styles"


function Orders() {
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
      async function fetchOrders() {
      const {data : newOrder } = await axios.get("https://git.heroku.com/backend-orders.git/orders");
      
      setOrders(newOrder);
    }
    
    fetchOrders()
    },[])

    async function deleteUser(clientId) {
        await axios.delete(`https://git.heroku.com/backend-orders.git/orders/${clientId}`);

    const newOrders = orders.filter((client) => client.id !== clientId);

    setOrders(newOrders);
   }

    function backtoHome() {
        navigate("/")
     }

  return (
    <Container>
      <Image src={BagOrders} alt="Saco de entrega" />
        <H1>Pedidos</H1>

        <ul>
          {orders.map((client) => (
            <Order key={client.id}>
              <p>{client.nameClient}</p> <p>{client.order}</p> <p>{client.adressClient}</p>
              <button onClick={() => deleteUser(client.id)} >
                <img src={Trasher} alt="Lixeira" />
              </button>
            </Order>
          ))}
        </ul>

        <Button onClick={(backtoHome)} > Voltar   </Button>

    </Container>
  );
}

export default Orders;
