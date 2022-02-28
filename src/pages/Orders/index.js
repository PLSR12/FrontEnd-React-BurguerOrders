import React, { useState, useEffect } from "react";

import axios from "axios";

import BagOrders from "../../assets/burger (1) 1.png";

import Trasher from "../../assets/trasher.svg";

import{
    Container,
    Image,
    H1,
    Order,
} from "./styles"


function Orders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
      async function fetchOrders() {
      const {data : newOrder } = await axios.get("https://backend-orders.herokuapp.com/orders");
      
      setOrders(newOrder);
    }
    
    fetchOrders()
    },[])

    async function deleteUser(clientId) {
        await axios.delete(`https://backend-orders.herokuapp.com/orders/${clientId}`);

    const newOrders = orders.filter((client) => client.id !== clientId);

    setOrders(newOrders);
   }

  return (
    <Container>
      <Image src={BagOrders} alt="Saco de entrega" />
        <H1>Pedidos</H1>

        <ul>
          
          {orders.map((client) => (
            <Order key={client.id}>
              <div>
              <p>{client.nameClient}</p>

             <p>{client.clientContact}</p>

              <p>{client.order}</p>

              <p>{client.adressClient}</p>

              <p>{client.paymentForm}</p>
                </div>

              <button onClick={() => deleteUser(client.id)} >
                <img src={Trasher} alt="Lixeira" />
              </button>

            </Order>
          ))}
        </ul>
    </Container>
  );
}

export default Orders;
