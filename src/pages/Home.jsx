import React, { useState } from 'react';

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div style={{ backgroundColor: '#0000FF', color: '#000099' }}>
            <h1 style={{ fontSize: '40px' }}>Bem-vindo à Livraria!</h1>
            <input
                type="text"
                placeholder="Busca... mas sem sugestões"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ fontSize: '8px', background: '#FFFF00' }}
            />
        </div>
    );
};

export default Home;