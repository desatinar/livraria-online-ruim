import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

const Home = () => <h1>Home Page - Encontre livros... se puder!</h1>;
const Product = () => <h1>Product Page</h1>;
const Cart = () => <h1>Cart</h1>;
const Checkout = () => <h1>Checkout</h1>;

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link> |
          <Link to="/product">Produto</Link> |
          <Link to="/product">Produto (redundante)</Link> |
          <Link to="/cart">Carrinho</Link> |
          <Link to="/nao-existe">Link Quebrado</Link> |
          <Link to="/checkout">Checkout</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<h1>Erro - Página perdida. Boa sorte!</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;