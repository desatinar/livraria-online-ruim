import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import './App.css';

function App() {
  const [showPopup, setShowPopup] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Popup irritante que aparece constantemente
    const interval = setInterval(() => setShowPopup(true), 8000);
    return () => clearInterval(interval);
  }, []);

  const addToCart = (item) => {
    setCartItems(prev => [...prev, item]);
  };

  return (
    <Router>
      <div className="app">
        {/* Header confuso com cores ruins */}
        <header style={{
          backgroundColor: '#FF6B6B',
          padding: '10px',
          borderBottom: '3px dotted #00FF00',
          textAlign: 'center'
        }}>
          <h1 style={{
            color: '#FFFF00',
            fontSize: '28px',
            fontFamily: 'Comic Sans MS',
            textShadow: '2px 2px #FF0000',
            margin: '5px 0'
          }}>
            📚 MEGA SUPER LIVRARIA ONLINE FANTÁSTICA 📚
          </h1>
          <p style={{ color: '#00FFFF', fontSize: '14px', margin: '5px 0' }}>
            O melhor site de livros do universo (talvez)
          </p>
        </header>

        {/* Menu de navegação confuso */}
        <nav style={{
          backgroundColor: '#8B4513',
          padding: '15px',
          textAlign: 'center',
          borderBottom: '5px solid #FFD700'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#FFFFFF', textDecoration: 'none', margin: '5px' }}>🏠 Principal</Link>
            <Link to="/ofertas" style={{ color: '#00FF00', textDecoration: 'none', margin: '5px' }}>💰 Promoções</Link>
            <Link to="/novidades" style={{ color: '#FF69B4', textDecoration: 'none', margin: '5px' }}>⭐ Novidades</Link>
            <Link to="/diversos" style={{ color: '#00FFFF', textDecoration: 'none', margin: '5px' }}>📦 Coisas</Link>
            <Link to="/autores" style={{ color: '#FFD700', textDecoration: 'none', margin: '5px' }}>👤 Escritores</Link>
            <Link to="/colecoes" style={{ color: '#FF4500', textDecoration: 'none', margin: '5px' }}>📚 Coleções</Link>
            <Link to="/ofertas-especiais" style={{ color: '#9370DB', textDecoration: 'none', margin: '5px' }}>🎁 Ofertas Especiais</Link>
            <Link to="/categorias" style={{ color: '#32CD32', textDecoration: 'none', margin: '5px' }}>📋 Categorias</Link>
            <Link to="/product/1" style={{ color: '#FF1493', textDecoration: 'none', margin: '5px' }}>📖 Um Livro</Link>
            <Link to="/product/1" style={{ color: '#FF1493', textDecoration: 'none', margin: '5px' }}>📖 O Mesmo Livro</Link>
            <Link to="/invalid" style={{ color: '#DC143C', textDecoration: 'none', margin: '5px' }}>❌ Link Quebrado</Link>
            <Link to="/ajuda" style={{ color: '#4169E1', textDecoration: 'none', margin: '5px' }}>❓ Socorro</Link>
          </div>
        </nav>

        {/* Carrinho escondido */}
        <div style={{
          position: 'fixed',
          bottom: '10px',
          right: '-80px',
          backgroundColor: '#333',
          color: 'white',
          padding: '5px 10px',
          fontSize: '10px',
          transform: 'rotate(-90deg)',
          cursor: 'pointer'
        }}>
          <Link to="/cart" style={{ color: 'white', textDecoration: 'none' }}>
            🛒 ({cartItems.length})
          </Link>
        </div>

        {/* Conteúdo principal */}
        <main>
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} />} />
            <Route path="/ofertas" element={<Home addToCart={addToCart} />} />
            <Route path="/novidades" element={<Home addToCart={addToCart} />} />
            <Route path="/diversos" element={<Home addToCart={addToCart} />} />
            <Route path="/autores" element={<Home addToCart={addToCart} />} />
            <Route path="/colecoes" element={<Home addToCart={addToCart} />} />
            <Route path="/ofertas-especiais" element={<Home addToCart={addToCart} />} />
            <Route path="/categorias" element={<Home addToCart={addToCart} />} />
            <Route path="/ajuda" element={<div style={{ padding: '20px', textAlign: 'center' }}><h2>Página de Ajuda (em construção há 5 anos)</h2></div>} />
            <Route path="/product/:id" element={<Product addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={
              <div style={{
                textAlign: 'center',
                padding: '50px',
                backgroundColor: '#FF0000',
                color: '#FFFFFF'
              }}>
                <h1>ERRO 404!</h1>
                <p>Página não encontrada. Isso é culpa sua!</p>
                <p>Tente clicar em outros links (boa sorte)</p>
              </div>
            } />
          </Routes>
        </main>

        {/* Popup irritante */}
        {showPopup && (
          <div style={{
            position: 'fixed',
            top: '20%',
            left: '25%',
            right: '25%',
            background: 'linear-gradient(45deg, #FF0000, #00FF00, #0000FF)',
            padding: '20px',
            border: '5px dashed #FFFF00',
            zIndex: 1000,
            textAlign: 'center',
            animation: 'blink 0.5s infinite'
          }}>
            <h2 style={{ color: '#FFFFFF', textShadow: '2px 2px #000000' }}>
              🎉 SUPER MEGA PROMOÇÃO IMPERDÍVEL! 🎉
            </h2>
            <p style={{ color: '#FFFF00', fontSize: '16px' }}>
              Compre 1 livro e pague por 2! Oferta limitada!
            </p>
            <button
              style={{
                fontSize: '8px',
                position: 'absolute',
                top: '5px',
                right: '5px',
                background: 'transparent',
                border: 'none',
                color: '#FFFFFF'
              }}
              onClick={() => setShowPopup(false)}
            >
              x
            </button>
          </div>
        )}

        {/* Footer confuso */}
        <footer style={{
          backgroundColor: '#2F4F4F',
          color: '#FFFFFF',
          padding: '20px',
          textAlign: 'center',
          marginTop: '50px'
        }}>
          <p>© 2024 Mega Super Livraria Online Fantástica - Todos os direitos confusos</p>
          <div style={{ marginTop: '10px' }}>
            <a href="#" style={{ color: '#FF69B4', margin: '0 10px' }}>Sobre Nós (404)</a>
            <a href="#" style={{ color: '#00FFFF', margin: '0 10px' }}>Contato (Não funciona)</a>
            <a href="#" style={{ color: '#FFD700', margin: '0 10px' }}>Política de Privacidade (Inexistente)</a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;