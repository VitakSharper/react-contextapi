import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import CartProvider from "./providers/cart/cart.provider";

import './index.css';
import App from './App';

const app = (
    <CartProvider>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </CartProvider>
);

ReactDOM.render(app, document.getElementById('root'));
