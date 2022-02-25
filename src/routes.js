import React from "react";
import { Routes ,Route} from "react-router-dom";

import Home from "./pages/Home"
import Congrats from "./pages/Congrats"
import Orders from "./pages/Orders"

function Router(){

    return(
        <Routes>
            <Route path="/" element={<Home/>}  />

            <Route path="/finalizado" element={<Congrats/>}  />
            
            <Route path="/pedidos" element={<Orders/>} />
        </Routes>
    )
}

export default Router;