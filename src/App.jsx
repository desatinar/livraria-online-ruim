import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import Product from './pages/Product.jsx';
import Checkout from './pages/Checkout.jsx';
import Cart from './pages/Cart.jsx';


function App() {
  const [showPopup, setShowPopup] = useState(true);
  useEffect(() => {
    setInterval(() => setShowPopup(true), 5000);
  }, []);

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
        {showPopup && (
          <div style={{ position: 'fixed', top: '10%', left: '10%', background: 'red', padding: '10px' }}>
            <h2>Pop-up Irritante!</h2>
            <button style={{ fontSize: '6px' }} onClick={() => setShowPopup(false)}>fechar</button> {/* Minúsculo */}
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;