import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  const [showPopup, setShowPopup] = useState(true);
  useEffect(() => {
    setInterval(() => setShowPopup(true), 7000);
  }, []);

  return (
    <Router>
      <div>
        <nav style={{ backgroundColor: '#00FF00', padding: '5px', textAlign: 'left' }}>
          <Link to="/">Home</Link> |
          <Link to="/product/1">Livro 1</Link> |
          <Link to="/product/1">Livro 1</Link> |
          <Link to="/cart">Carrinho</Link> |
          <Link to="/invalid">Link Inválido</Link> |
          <Link to="/checkout">Checkout</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<h1>Erro 404: Página não encontrada. Tente novamente!</h1>} />
        </Routes>
        {showPopup && (
          <div style={{ position: 'fixed', top: '15%', left: '15%', background: '#FF0000', padding: '10px', border: '2px solid black' }}>
            <h2>Promoção Imperdível!</h2>
            <button style={{ fontSize: '6px' }} onClick={() => setShowPopup(false)}>Fechar</button>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;