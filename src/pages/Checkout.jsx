import React, { useState } from 'react';

const Checkout = () => {
    const [formData, setFormData] = useState({ email: '', name: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Erro! Algo está errado.');
    };

    return (
        <form onSubmit={handleSubmit} style={{ fontSize: '10px' }}>
            <input type="text" placeholder="Adivinhe o campo" name="name" onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} /> {/* Sem label */}
            <input type="text" placeholder="Outro campo misterioso" name="email" onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} />
            <button type="submit" style={{ visibility: 'hidden' }}>Enviar (escondido)</button>
            <button type="button">Botão falso</button>
        </form>
    );
};

export default Checkout;