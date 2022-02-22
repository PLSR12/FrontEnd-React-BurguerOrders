import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/globalStyles';
import Router from "./routes";
import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
    <> 
    <BrowserRouter>
        <Router /> 
        < GlobalStyle /> 
    </BrowserRouter>
    </> ,
    document.getElementById('root')
    );