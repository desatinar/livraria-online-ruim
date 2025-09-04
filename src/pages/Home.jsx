import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = ({ addToCart }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    // Dados fictícios de livros com informações confusas
    const books = [
        {
            id: 1,
            title: "O Segredo dos Segredos Secretos",
            author: "Autor Desconhecido",
            price: 29.99,
            oldPrice: 19.99,
            category: "Mistério",
            image: "https://via.placeholder.com/120x180/FF0000/FFFFFF?text=Livro+1",
            description: "Um livro sobre coisas"
        },
        {
            id: 2,
            title: "Manual de Como Não Fazer Nada",
            author: "Fulano de Tal",
            price: 45.00,
            oldPrice: 89.99,
            category: "Autoajuda",
            image: "https://via.placeholder.com/120x180/00FF00/000000?text=Livro+2",
            description: "Aprenda a não fazer nada em 500 páginas"
        },
        {
            id: 3,
            title: "A História da História das Histórias",
            author: "Maria Silva Santos",
            price: 15.99,
            oldPrice: 12.99,
            category: "História",
            image: "https://via.placeholder.com/120x180/0000FF/FFFFFF?text=Livro+3",
            description: "História sobre histórias históricas"
        },
        {
            id: 4,
            title: "Culinária Extrema Para Iniciantes Avançados",
            author: "Chef Confuso",
            price: 99.99,
            oldPrice: 39.99,
            category: "Culinária",
            image: "https://via.placeholder.com/120x180/FFFF00/000000?text=Livro+4",
            description: "Receitas impossíveis para quem não sabe cozinhar"
        },
        {
            id: 5,
            title: "Matemática Emocional",
            author: "Dr. Números",
            price: 78.50,
            oldPrice: 78.50,
            category: "Educação",
            image: "https://via.placeholder.com/120x180/FF69B4/FFFFFF?text=Livro+5",
            description: "Como resolver equações com o coração"
        }
    ];

    return (
        <div style={{ backgroundColor: '#F0F8FF', minHeight: '100vh' }}>
            {/* Banners confusos */}
            <div style={{
                backgroundColor: '#FF6B6B',
                padding: '20px',
                textAlign: 'center',
                border: '5px dotted #00FF00'
            }}>
                <h2 style={{
                    color: '#FFFF00',
                    fontSize: '32px',
                    textShadow: '3px 3px #FF0000',
                    animation: 'shake 0.5s infinite'
                }}>
                    🎊 SUPER MEGA OFERTAS INCRÍVEIS! 🎊
                </h2>
                <p style={{ color: '#00FFFF', fontSize: '18px' }}>
                    Até 150% de desconto em livros selecionados*
                </p>
                <p style={{ color: '#FFFFFF', fontSize: '8px' }}>
                    *Desconto aplicado sobre preço inflacionado
                </p>
            </div>

            {/* Área de busca problemática */}
            <div style={{
                padding: '20px',
                backgroundColor: '#DDA0DD',
                border: '3px solid #FF1493'
            }}>
                <h3 style={{ color: '#8B0000', textAlign: 'right' }}>
                    Encontre seu livro (se conseguir)
                </h3>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <input
                        type="text"
                        placeholder="Digite algo aqui (sem sugestões)"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{
                            fontSize: '10px',
                            background: '#FFFFE0',
                            border: '2px dashed #FF69B4',
                            padding: '5px',
                            color: '#8B0000',
                            width: '200px'
                        }}
                    />
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        style={{
                            fontSize: '9px',
                            background: '#F0E68C',
                            border: '2px solid #DC143C',
                            color: '#000080'
                        }}
                    >
                        <option value="">Todas as Coisas</option>
                        <option value="Mistério">Coisas Misteriosas</option>
                        <option value="Autoajuda">Livros de Ajuda</option>
                        <option value="História">Coisas Antigas</option>
                        <option value="Culinária">Comida em Livro</option>
                        <option value="Educação">Coisas Educativas</option>
                        <option value="Romance">Amor e Tal</option>
                        <option value="Ficção">Mentiras Organizadas</option>
                    </select>
                    <button style={{
                        background: '#FF4500',
                        color: '#FFFFFF',
                        border: '1px solid #000000',
                        padding: '3px 6px',
                        fontSize: '8px',
                        cursor: 'pointer'
                    }}>
                        🔍
                    </button>
                </div>

                {/* Filtros confusos */}
                <div style={{ marginTop: '10px', fontSize: '10px' }}>
                    <span style={{ color: '#4B0082' }}>Filtros Avançados: </span>
                    <label style={{ margin: '0 5px' }}>
                        <input type="checkbox" /> Só livros bons
                    </label>
                    <label style={{ margin: '0 5px' }}>
                        <input type="checkbox" /> Com páginas
                    </label>
                    <label style={{ margin: '0 5px' }}>
                        <input type="checkbox" /> Em português (talvez)
                    </label>
                    <label style={{ margin: '0 5px' }}>
                        <input type="checkbox" /> Sem defeitos visíveis
                    </label>
                </div>
            </div>

            {/* Layout confuso com sidebar */}
            <div style={{ display: 'flex', minHeight: '500px' }}>
                {/* Sidebar mal posicionada */}
                <div className="sidebar" style={{
                    width: '200px',
                    background: '#E6E6FA',
                    padding: '10px',
                    border: '2px solid #9370DB'
                }}>
                    <h4 style={{ color: '#4B0082', fontSize: '12px' }}>Categorias (Confusas)</h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li><a href="#" style={{ color: '#DC143C', fontSize: '9px' }}>► Romance Policial</a></li>
                        <li><a href="#" style={{ color: '#FF4500', fontSize: '9px' }}>► Ficção Não-Ficcional</a></li>
                        <li><a href="#" style={{ color: '#32CD32', fontSize: '9px' }}>► História Futura</a></li>
                        <li><a href="#" style={{ color: '#FF1493', fontSize: '9px' }}>► Culinária Teórica</a></li>
                        <li><a href="#" style={{ color: '#00CED1', fontSize: '9px' }}>► Matemática Emocional</a></li>
                        <li><a href="#" style={{ color: '#FFD700', fontSize: '9px' }}>► Autoajuda para Outros</a></li>
                        <li><a href="#" style={{ color: '#8B4513', fontSize: '9px' }}>► Livros sem Texto</a></li>
                        <li><a href="#" style={{ color: '#FF6347', fontSize: '9px' }}>► Diversos Diversos</a></li>
                    </ul>

                    <h4 style={{ color: '#4B0082', fontSize: '12px', marginTop: '20px' }}>
                        Promoções do Dia
                    </h4>
                    <div style={{
                        background: '#FFB6C1',
                        padding: '5px',
                        border: '1px dashed #FF1493',
                        fontSize: '8px'
                    }}>
                        <p>📖 Compre 2 pague 3!</p>
                        <p>🎁 Frete grátis acima de R$ 500</p>
                        <p>💰 10% de desconto com cupom CONFUSO</p>
                        <p style={{ color: '#8B0000' }}>⚠️ Ofertas válidas apenas às quartas-feiras pares</p>
                    </div>
                </div>

                {/* Conteúdo principal */}
                <div style={{ flex: 1, padding: '10px' }}>
                    {/* Grid de produtos desorganizado */}
                    <h3 style={{
                        color: '#8B0000',
                        textAlign: 'center',
                        backgroundColor: '#FFFF00',
                        padding: '10px',
                        border: '2px solid #FF0000'
                    }}>
                        📚 Livros em Destaque (Ou Não) 📚
                    </h3>

                    <div className="product-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '10px',
                        padding: '10px'
                    }}>
                        {books.map(book => (
                            <div key={book.id} className="product-card" style={{
                                border: '3px solid #FF1493',
                                padding: '10px',
                                background: 'linear-gradient(45deg, #FFFF00, #00FFFF)',
                                position: 'relative'
                            }}>
                                <img
                                    src={book.image}
                                    alt={book.title}
                                    style={{
                                        width: '80px',
                                        height: '120px',
                                        float: 'right',
                                        border: '1px solid #000000'
                                    }}
                                />
                                <h4 style={{
                                    fontSize: '11px',
                                    color: '#8B0000',
                                    textDecoration: 'underline',
                                    margin: '5px 0'
                                }}>
                                    {book.title}
                                </h4>
                                <p style={{ fontSize: '9px', color: '#4B0082', margin: '2px 0' }}>
                                    Por: {book.author}
                                </p>
                                <p style={{ fontSize: '8px', color: '#006400', margin: '2px 0' }}>
                                    {book.description}
                                </p>

                                <div style={{ margin: '5px 0' }}>
                                    <span style={{
                                        fontSize: '16px',
                                        color: '#FF0000',
                                        fontWeight: 'bold'
                                    }}>
                                        R$ {book.price}
                                    </span>
                                    <br />
                                    <span style={{
                                        fontSize: '10px',
                                        color: '#00FF00',
                                        textDecoration: 'line-through'
                                    }}>
                                        De: R$ {book.oldPrice}
                                    </span>
                                </div>

                                <div style={{ marginTop: '10px' }}>
                                    <Link
                                        to={`/product/${book.id}`}
                                        style={{
                                            background: '#FF4500',
                                            color: '#FFFFFF',
                                            padding: '3px 6px',
                                            textDecoration: 'none',
                                            fontSize: '8px',
                                            border: '1px solid #000000',
                                            marginRight: '5px'
                                        }}
                                    >
                                        Ver Detalhes
                                    </Link>
                                    <button
                                        onClick={() => addToCart(book)}
                                        style={{
                                            background: '#32CD32',
                                            color: '#000000',
                                            padding: '3px 6px',
                                            fontSize: '8px',
                                            border: '1px solid #000000',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        Comprar Agora
                                    </button>
                                </div>

                                {/* Selo de promoção confuso */}
                                <div style={{
                                    position: 'absolute',
                                    top: '-5px',
                                    left: '-5px',
                                    background: '#FF0000',
                                    color: '#FFFFFF',
                                    padding: '2px 4px',
                                    fontSize: '6px',
                                    transform: 'rotate(-15deg)',
                                    border: '1px solid #000000'
                                }}>
                                    OFERTA!
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Tabela de produtos mal formatada */}
                    <h3 style={{
                        color: '#8B0000',
                        backgroundColor: '#FFFFE0',
                        padding: '5px',
                        textAlign: 'left',
                        border: '1px solid #FF69B4'
                    }}>
                        Lista Completa de Produtos (Tabela Confusa)
                    </h3>

                    <table className="products-table" style={{
                        width: '100%',
                        borderCollapse: 'separate',
                        borderSpacing: '5px',
                        fontSize: '8px'
                    }}>
                        <thead>
                            <tr>
                                <th style={{ background: '#FF6B6B', color: '#FFFF00', padding: '2px' }}>ID</th>
                                <th style={{ background: '#FF6B6B', color: '#FFFF00', padding: '2px' }}>Nome do Livro</th>
                                <th style={{ background: '#FF6B6B', color: '#FFFF00', padding: '2px' }}>Quem Escreveu</th>
                                <th style={{ background: '#FF6B6B', color: '#FFFF00', padding: '2px' }}>€ Preço €</th>
                                <th style={{ background: '#FF6B6B', color: '#FFFF00', padding: '2px' }}>Preço Antigo</th>
                                <th style={{ background: '#FF6B6B', color: '#FFFF00', padding: '2px' }}>Tipo</th>
                                <th style={{ background: '#FF6B6B', color: '#FFFF00', padding: '2px' }}>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.map(book => (
                                <tr key={book.id}>
                                    <td style={{ background: '#E0E0E0', padding: '1px' }}>{book.id}</td>
                                    <td style={{ background: '#E0E0E0', padding: '1px' }}>{book.title}</td>
                                    <td style={{ background: '#E0E0E0', padding: '1px' }}>{book.author}</td>
                                    <td style={{ background: '#E0E0E0', padding: '1px', color: '#FF0000' }}>R$ {book.price}</td>
                                    <td style={{ background: '#E0E0E0', padding: '1px', textDecoration: 'line-through' }}>R$ {book.oldPrice}</td>
                                    <td style={{ background: '#E0E0E0', padding: '1px' }}>{book.category}</td>
                                    <td style={{ background: '#E0E0E0', padding: '1px' }}>
                                        <button style={{ fontSize: '6px', padding: '1px 2px' }}>Ver</button>
                                        <button style={{ fontSize: '6px', padding: '1px 2px' }}>+🛒</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Links confusos */}
                    <div style={{
                        marginTop: '30px',
                        padding: '10px',
                        backgroundColor: '#F5F5DC',
                        border: '2px dashed #8B4513'
                    }}>
                        <h4 style={{ color: '#8B4513' }}>Links Relacionados (Ou Não)</h4>
                        <div style={{ fontSize: '10px' }}>
                            <a href="#" style={{ color: '#DC143C', margin: '0 5px' }}>Livros que você não pediu</a> |
                            <a href="#" style={{ color: '#FF4500', margin: '0 5px' }}>Autores desconhecidos</a> |
                            <a href="#" style={{ color: '#32CD32', margin: '0 5px' }}>Categorias inexistentes</a> |
                            <a href="#" style={{ color: '#4169E1', margin: '0 5px' }}>Promoções expiradas</a> |
                            <a href="#" style={{ color: '#FF1493', margin: '0 5px' }}>Link quebrado</a> |
                            <a href="#" style={{ color: '#00CED1', margin: '0 5px' }}>Página em construção</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Newsletter confusa */}
            <div style={{
                backgroundColor: '#FFE4E1',
                padding: '20px',
                textAlign: 'center',
                border: '3px solid #FF69B4',
                marginTop: '20px'
            }}>
                <h3 style={{ color: '#8B0000' }}>📧 Cadastre-se para receber spam! 📧</h3>
                <div style={{ marginTop: '10px' }}>
                    <input
                        type="text"
                        placeholder="Seu e-mail aqui"
                        style={{
                            fontSize: '8px',
                            padding: '2px',
                            width: '100px',
                            border: '1px solid #FF1493'
                        }}
                    />
                    <button style={{
                        fontSize: '6px',
                        padding: '2px 4px',
                        background: '#FF69B4',
                        color: '#FFFFFF',
                        border: '1px solid #000000',
                        marginLeft: '5px'
                    }}>
                        Enviar
                    </button>
                </div>
                <p style={{ fontSize: '6px', color: '#8B0000', marginTop: '5px' }}>
                    Prometemos enviar 20 e-mails por dia sobre ofertas que você não quer
                </p>
            </div>
        </div>
    );
};

export default Home;