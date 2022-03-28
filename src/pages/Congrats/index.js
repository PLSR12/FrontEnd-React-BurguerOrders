import React from "react";

import Logo from "../../assets/burger 1.png" ;

import whatsapp from "../../assets/whatsapp-circle-1868968-1583132.png";

import {
    Container,
    Image,
    WhatsApp,
    H1
} from "./styles.js";

function congrats() {

    return (
    <Container>
        <Image src={Logo} alt="logo" />
        <H1> Pedido concluído, confirme o valor do pedido pelo WhatsApp! </H1>
        <WhatsApp src={whatsapp} alt="WhatsApp icone"/>
    </Container>
    );
}

export default congrats