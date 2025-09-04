import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [sortBy, setSortBy] = useState('');
    const [filterBy, setFilterBy] = useState('');
    const [viewMode, setViewMode] = useState('grid');

    // Dados fictícios expandidos de livros
    const allBooks = [
        {
            id: 1,
            title: "O Segredo dos Segredos Secretos: Edição Especial Limitada Premium Gold",
            author: "Dr. Mysterioso dos Santos Silva",
            price: 89.99,
            oldPrice: 45.99,
            category: "Mistério Psicológico Romance Policial",
            image: "https://via.placeholder.com/150x225/FF0000/FFFFFF?text=Livro+1",
            description: "Um livro sobre coisas misteriosas e secretas",
            rating: 4.7,
            reviews: 1247,
            inStock: true,
            bestseller: true
        },
        {
            id: 2,
            title: "Manual de Como Não Fazer Nada Produtivamente",
            author: "Fulano de Tal dos Santos",
            price: 45.00,
            oldPrice: 89.99,
            category: "Autoajuda Motivacional",
            image: "https://via.placeholder.com/150x225/00FF00/000000?text=Livro+2",
            description: "Aprenda a não fazer nada de forma eficiente",
            rating: 3.2,
            reviews: 856,
            inStock: false,
            bestseller: false
        },
        {
            id: 3,
            title: "A História da História das Histórias Históricas",
            author: "Maria Silva Santos da Conceição",
            price: 15.99,
            oldPrice: 12.99,
            category: "História Contemporânea Antiga",
            image: "https://via.placeholder.com/150x225/0000FF/FFFFFF?text=Livro+3",
            description: "História sobre histórias históricas da história",
            rating: 4.1,
            reviews: 423,
            inStock: true,
            bestseller: false
        },
        {
            id: 4,
            title: "Culinária Extrema Para Iniciantes Avançados Intermediários",
            author: "Chef Confuso Master Gourmet",
            price: 99.99,
            oldPrice: 39.99,
            category: "Culinária Gastronômica",
            image: "https://via.placeholder.com/150x225/FFFF00/000000?text=Livro+4",
            description: "Receitas impossíveis para quem não sabe cozinhar",
            rating: 2.8,
            reviews: 234,
            inStock: true,
            bestseller: true
        },
        {
            id: 5,
            title: "Matemática Emocional: Calculando Sentimentos",
            author: "Dr. Números Emocionais PhD",
            price: 78.50,
            oldPrice: 78.50,
            category: "Educação Matemática Psicológica",
            image: "https://via.placeholder.com/150x225/FF69B4/FFFFFF?text=Livro+5",
            description: "Como resolver equações com o coração",
            rating: 4.9,
            reviews: 1892,
            inStock: true,
            bestseller: false
        },
        {
            id: 6,
            title: "Filosofia Prática do Cotidiano Extraordinário",
            author: "Pensador Genérico Universal",
            price: 67.30,
            oldPrice: 123.45,
            category: "Filosofia Contemporânea Prática",
            image: "https://via.placeholder.com/150x225/800080/FFFFFF?text=Livro+6",
            description: "Reflexões profundas sobre coisas simples",
            rating: 3.7,
            reviews: 567,
            inStock: false,
            bestseller: false
        },
        {
            id: 7,
            title: "Guia Completo de Procrastinação Eficiente",
            author: "Mestre da Preguiça Zen",
            price: 33.33,
            oldPrice: 66.66,
            category: "Autoajuda Produtiva",
            image: "https://via.placeholder.com/150x225/FFA500/000000?text=Livro+7",
            description: "Como adiar tudo de forma organizada",
            rating: 4.3,
            reviews: 789,
            inStock: true,
            bestseller: true
        },
        {
            id: 8,
            title: "Romance Policial Científico Fantástico",
            author: "Autor Multidimensional",
            price: 54.99,
            oldPrice: 27.50,
            category: "Ficção Híbrida Experimental",
            image: "https://via.placeholder.com/150x225/008080/FFFFFF?text=Livro+8",
            description: "Todos os gêneros literários em um só livro",
            rating: 2.1,
            reviews: 156,
            inStock: true,
            bestseller: false
        }
    ];

    return (
        <div style={{ backgroundColor: '#F5F5F5', minHeight: '100vh', padding: '10px' }}>
            {/* Header confuso */}
            <div style={{
                backgroundColor: '#FF6B6B',
                padding: '15px',
                textAlign: 'center',
                border: '3px dashed #00FF00',
                marginBottom: '20px'
            }}>
                <h1 style={{
                    color: '#FFFF00',
                    fontSize: '24px',
                    fontFamily: 'Comic Sans MS',
                    textShadow: '2px 2px #FF0000',
                    margin: 0
                }}>
                    📚 TODOS OS NOSSOS LIVROS INCRÍVEIS! 📚
                </h1>
                <p style={{ color: '#00FFFF', fontSize: '12px', margin: '5px 0' }}>
                    (Encontre o que procura... se conseguir!)
                </p>
            </div>

            {/* Navegação confusa */}
            <div style={{
                backgroundColor: '#E0E0E0',
                padding: '10px',
                border: '2px solid #808080',
                marginBottom: '20px',
                fontSize: '10px'
            }}>
                <span>Você está aqui: </span>
                <Link to="/" style={{ color: '#4169E1' }}>Início</Link>
                <span> &gt; </span>
                <span style={{ color: '#8B0000' }}>Produtos</span>
                <span style={{ float: 'right', color: '#666666' }}>
                    {allBooks.length} produtos encontrados
                </span>
            </div>

            <div style={{ display: 'flex', gap: '20px' }}>

                {/* Filtros e ordenação confusos */}
                <div style={{
                    flex: '0 0 250px',
                    backgroundColor: '#E6E6FA',
                    border: '3px solid #9370DB',
                    padding: '15px',
                    height: 'fit-content'
                }}>
                    <h3 style={{
                        color: '#4B0082',
                        fontSize: '14px',
                        textAlign: 'center',
                        marginBottom: '15px',
                        backgroundColor: '#DDA0DD',
                        padding: '8px',
                        border: '2px solid #9370DB'
                    }}>
                        🔍 FILTROS E ORDENAÇÃO 🔍
                    </h3>

                    {/* Ordenação */}
                    <div style={{ marginBottom: '20px' }}>
                        <h4 style={{ fontSize: '10px', color: '#4B0082', marginBottom: '8px' }}>
                            Ordenar por:
                        </h4>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '3px',
                                fontSize: '8px',
                                border: '2px solid #9370DB',
                                backgroundColor: '#F8F8FF'
                            }}
                        >
                            <option value="">Selecione uma opção</option>
                            <option value="price-low">Menor preço</option>
                            <option value="price-high">Maior preço</option>
                            <option value="name-az">Nome A-Z</option>
                            <option value="name-za">Nome Z-A</option>
                            <option value="rating">Avaliação</option>
                            <option value="random">Aleatório</option>
                            <option value="bestsellers">Mais vendidos</option>
                            <option value="worst">Piores avaliados</option>
                        </select>
                    </div>

                    {/* Filtros por categoria */}
                    <div style={{ marginBottom: '20px' }}>
                        <h4 style={{ fontSize: '10px', color: '#4B0082', marginBottom: '8px' }}>
                            Filtrar por categoria:
                        </h4>
                        <select
                            value={filterBy}
                            onChange={(e) => setFilterBy(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '3px',
                                fontSize: '8px',
                                border: '2px solid #9370DB',
                                backgroundColor: '#F8F8FF'
                            }}
                        >
                            <option value="">Todas as categorias</option>
                            <option value="Mistério">Mistério</option>
                            <option value="Autoajuda">Autoajuda</option>
                            <option value="História">História</option>
                            <option value="Culinária">Culinária</option>
                            <option value="Educação">Educação</option>
                            <option value="Filosofia">Filosofia</option>
                            <option value="Ficção">Ficção</option>
                        </select>
                    </div>

                    {/* Filtros adicionais confusos */}
                    <div style={{
                        backgroundColor: '#F0F8FF',
                        padding: '8px',
                        border: '1px dashed #87CEEB',
                        marginBottom: '15px',
                        fontSize: '8px'
                    }}>
                        <h4 style={{ fontSize: '9px', color: '#4682B4', marginBottom: '5px' }}>
                            Filtros Especiais:
                        </h4>
                        <label style={{ display: 'block', margin: '3px 0' }}>
                            <input type="checkbox" style={{ marginRight: '5px' }} />
                            Apenas em estoque
                        </label>
                        <label style={{ display: 'block', margin: '3px 0' }}>
                            <input type="checkbox" style={{ marginRight: '5px' }} />
                            Só os mais vendidos
                        </label>
                        <label style={{ display: 'block', margin: '3px 0' }}>
                            <input type="checkbox" style={{ marginRight: '5px' }} />
                            Com desconto
                        </label>
                        <label style={{ display: 'block', margin: '3px 0' }}>
                            <input type="checkbox" style={{ marginRight: '5px' }} />
                            Avaliação 4+ estrelas
                        </label>
                        <label style={{ display: 'block', margin: '3px 0' }}>
                            <input type="checkbox" style={{ marginRight: '5px' }} />
                            Autores brasileiros
                        </label>
                        <label style={{ display: 'block', margin: '3px 0' }}>
                            <input type="checkbox" style={{ marginRight: '5px' }} />
                            Livros confusos
                        </label>
                    </div>

                    {/* Faixa de preço */}
                    <div style={{ marginBottom: '15px' }}>
                        <h4 style={{ fontSize: '10px', color: '#4B0082', marginBottom: '8px' }}>
                            Faixa de preço:
                        </h4>
                        <div style={{ fontSize: '8px', marginBottom: '5px' }}>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                style={{ width: '100%' }}
                            />
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span>R$ 0,00</span>
                                <span>R$ 100,00+</span>
                            </div>
                        </div>
                    </div>

                    {/* Modo de visualização */}
                    <div style={{ marginBottom: '15px' }}>
                        <h4 style={{ fontSize: '10px', color: '#4B0082', marginBottom: '8px' }}>
                            Visualização:
                        </h4>
                        <div style={{ display: 'flex', gap: '5px' }}>
                            <button
                                onClick={() => setViewMode('grid')}
                                style={{
                                    background: viewMode === 'grid' ? '#9370DB' : '#E6E6FA',
                                    color: viewMode === 'grid' ? '#FFFFFF' : '#4B0082',
                                    border: '1px solid #9370DB',
                                    padding: '3px 6px',
                                    fontSize: '7px',
                                    cursor: 'pointer'
                                }}
                            >
                                🔲 Grade
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                style={{
                                    background: viewMode === 'list' ? '#9370DB' : '#E6E6FA',
                                    color: viewMode === 'list' ? '#FFFFFF' : '#4B0082',
                                    border: '1px solid #9370DB',
                                    padding: '3px 6px',
                                    fontSize: '7px',
                                    cursor: 'pointer'
                                }}
                            >
                                📋 Lista
                            </button>
                        </div>
                    </div>
                </div>

                {/* Lista/Grade de produtos */}
                <div style={{ flex: 1 }}>

                    {/* Barra de resultado confusa */}
                    <div style={{
                        backgroundColor: '#FFFACD',
                        padding: '10px',
                        border: '2px solid #F0E68C',
                        marginBottom: '20px',
                        fontSize: '10px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <span style={{ color: '#8B4513' }}>
                            Exibindo {allBooks.length} de {allBooks.length} produtos
                        </span>
                        <span style={{ color: '#666666' }}>
                            Página 1 de 1
                        </span>
                    </div>

                    {/* Grid de produtos */}
                    {viewMode === 'grid' && (
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                            gap: '15px'
                        }}>
                            {allBooks.map(book => (
                                <div key={book.id} style={{
                                    border: '3px solid #FF1493',
                                    padding: '12px',
                                    backgroundColor: 'linear-gradient(45deg, #FFFF00, #00FFFF)',
                                    background: '#FFFFFF',
                                    position: 'relative',
                                    textAlign: 'center'
                                }}>
                                    {/* Selos e badges confusos */}
                                    {book.bestseller && (
                                        <div style={{
                                            position: 'absolute',
                                            top: '-5px',
                                            left: '-5px',
                                            background: '#FF0000',
                                            color: '#FFFFFF',
                                            padding: '2px 6px',
                                            fontSize: '6px',
                                            transform: 'rotate(-15deg)',
                                            border: '1px solid #000000'
                                        }}>
                                            BESTSELLER!
                                        </div>
                                    )}

                                    {!book.inStock && (
                                        <div style={{
                                            position: 'absolute',
                                            top: '10px',
                                            right: '10px',
                                            background: '#8B0000',
                                            color: '#FFFFFF',
                                            padding: '2px 4px',
                                            fontSize: '6px',
                                            border: '1px solid #000000'
                                        }}>
                                            ESGOTADO
                                        </div>
                                    )}

                                    <img
                                        src={book.image}
                                        alt={book.title}
                                        style={{
                                            width: '120px',
                                            height: '180px',
                                            border: '2px solid #000000',
                                            marginBottom: '8px'
                                        }}
                                    />

                                    <h3 style={{
                                        fontSize: '11px',
                                        color: '#8B0000',
                                        textDecoration: 'underline',
                                        margin: '5px 0',
                                        height: '40px',
                                        overflow: 'hidden'
                                    }}>
                                        {book.title}
                                    </h3>

                                    <p style={{
                                        fontSize: '9px',
                                        color: '#4B0082',
                                        margin: '3px 0'
                                    }}>
                                        {book.author}
                                    </p>

                                    <p style={{
                                        fontSize: '8px',
                                        color: '#006400',
                                        margin: '3px 0'
                                    }}>
                                        {book.category}
                                    </p>

                                    {/* Avaliação */}
                                    <div style={{ margin: '5px 0', fontSize: '8px' }}>
                                        <span style={{ color: '#FFD700' }}>
                                            {'★'.repeat(Math.floor(book.rating))}{'☆'.repeat(5 - Math.floor(book.rating))}
                                        </span>
                                        <span style={{ color: '#666666', marginLeft: '5px' }}>
                                            {book.rating} ({book.reviews})
                                        </span>
                                    </div>

                                    {/* Preços */}
                                    <div style={{ margin: '8px 0' }}>
                                        <div style={{
                                            fontSize: '16px',
                                            color: '#FF0000',
                                            fontWeight: 'bold'
                                        }}>
                                            R$ {book.price.toFixed(2)}
                                        </div>
                                        {book.oldPrice !== book.price && (
                                            <div style={{
                                                fontSize: '10px',
                                                color: '#00FF00',
                                                textDecoration: 'line-through'
                                            }}>
                                                De: R$ {book.oldPrice.toFixed(2)}
                                            </div>
                                        )}
                                    </div>

                                    {/* Botões */}
                                    <div style={{ marginTop: '10px' }}>
                                        <Link
                                            to={`/product/${book.id}`}
                                            style={{
                                                background: '#FF4500',
                                                color: '#FFFFFF',
                                                padding: '4px 8px',
                                                textDecoration: 'none',
                                                fontSize: '8px',
                                                border: '1px solid #000000',
                                                marginRight: '5px',
                                                display: 'inline-block',
                                                marginBottom: '5px'
                                            }}
                                        >
                                            Ver Detalhes
                                        </Link>
                                        <button
                                            disabled={!book.inStock}
                                            style={{
                                                background: book.inStock ? '#32CD32' : '#CCCCCC',
                                                color: book.inStock ? '#000000' : '#666666',
                                                padding: '4px 8px',
                                                fontSize: '8px',
                                                border: '1px solid #000000',
                                                cursor: book.inStock ? 'pointer' : 'not-allowed',
                                                display: 'block',
                                                width: '100%'
                                            }}
                                        >
                                            {book.inStock ? '🛒 Comprar' : '❌ Indisponível'}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Lista de produtos */}
                    {viewMode === 'list' && (
                        <div>
                            {allBooks.map(book => (
                                <div key={book.id} style={{
                                    display: 'flex',
                                    gap: '15px',
                                    padding: '15px',
                                    marginBottom: '15px',
                                    backgroundColor: '#FFFFFF',
                                    border: '2px solid #FF1493',
                                    position: 'relative'
                                }}>
                                    <img
                                        src={book.image}
                                        alt={book.title}
                                        style={{
                                            width: '100px',
                                            height: '150px',
                                            border: '2px solid #000000'
                                        }}
                                    />

                                    <div style={{ flex: 1 }}>
                                        <h3 style={{
                                            fontSize: '14px',
                                            color: '#8B0000',
                                            textDecoration: 'underline',
                                            margin: '0 0 5px 0'
                                        }}>
                                            {book.title}
                                        </h3>

                                        <p style={{
                                            fontSize: '10px',
                                            color: '#4B0082',
                                            margin: '3px 0'
                                        }}>
                                            Autor: {book.author}
                                        </p>

                                        <p style={{
                                            fontSize: '9px',
                                            color: '#006400',
                                            margin: '3px 0'
                                        }}>
                                            Categoria: {book.category}
                                        </p>

                                        <p style={{
                                            fontSize: '10px',
                                            color: '#333333',
                                            margin: '8px 0',
                                            lineHeight: '1.3'
                                        }}>
                                            {book.description}
                                        </p>

                                        <div style={{ fontSize: '9px', margin: '5px 0' }}>
                                            <span style={{ color: '#FFD700' }}>
                                                {'★'.repeat(Math.floor(book.rating))}{'☆'.repeat(5 - Math.floor(book.rating))}
                                            </span>
                                            <span style={{ color: '#666666', marginLeft: '5px' }}>
                                                {book.rating} ({book.reviews} avaliações)
                                            </span>
                                        </div>
                                    </div>

                                    <div style={{
                                        width: '150px',
                                        textAlign: 'center',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between'
                                    }}>
                                        <div>
                                            <div style={{
                                                fontSize: '18px',
                                                color: '#FF0000',
                                                fontWeight: 'bold',
                                                marginBottom: '5px'
                                            }}>
                                                R$ {book.price.toFixed(2)}
                                            </div>
                                            {book.oldPrice !== book.price && (
                                                <div style={{
                                                    fontSize: '12px',
                                                    color: '#00FF00',
                                                    textDecoration: 'line-through'
                                                }}>
                                                    De: R$ {book.oldPrice.toFixed(2)}
                                                </div>
                                            )}
                                        </div>

                                        <div style={{ marginTop: '15px' }}>
                                            <Link
                                                to={`/product/${book.id}`}
                                                style={{
                                                    background: '#FF4500',
                                                    color: '#FFFFFF',
                                                    padding: '6px 12px',
                                                    textDecoration: 'none',
                                                    fontSize: '10px',
                                                    border: '1px solid #000000',
                                                    display: 'block',
                                                    marginBottom: '8px'
                                                }}
                                            >
                                                Ver Detalhes
                                            </Link>
                                            <button
                                                disabled={!book.inStock}
                                                style={{
                                                    background: book.inStock ? '#32CD32' : '#CCCCCC',
                                                    color: book.inStock ? '#000000' : '#666666',
                                                    padding: '6px 12px',
                                                    fontSize: '10px',
                                                    border: '1px solid #000000',
                                                    cursor: book.inStock ? 'pointer' : 'not-allowed',
                                                    width: '100%'
                                                }}
                                            >
                                                {book.inStock ? '🛒 Comprar' : '❌ Indisponível'}
                                            </button>
                                        </div>
                                    </div>

                                    {book.bestseller && (
                                        <div style={{
                                            position: 'absolute',
                                            top: '10px',
                                            right: '10px',
                                            background: '#FF0000',
                                            color: '#FFFFFF',
                                            padding: '3px 8px',
                                            fontSize: '8px',
                                            border: '1px solid #000000'
                                        }}>
                                            BESTSELLER!
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Paginação confusa */}
                    <div style={{
                        marginTop: '30px',
                        textAlign: 'center',
                        backgroundColor: '#F0F0F0',
                        padding: '15px',
                        border: '2px solid #CCCCCC'
                    }}>
                        <div style={{ fontSize: '10px', marginBottom: '10px' }}>
                            <span style={{ color: '#333333' }}>
                                Página 1 de 1 | Mostrando todos os {allBooks.length} produtos
                            </span>
                        </div>
                        <div style={{ display: 'flex', gap: '5px', justifyContent: 'center' }}>
                            <button style={{
                                background: '#E0E0E0',
                                color: '#AAAAAA',
                                border: '1px solid #CCCCCC',
                                padding: '5px 10px',
                                fontSize: '8px',
                                cursor: 'not-allowed'
                            }}>
                                ⬅️ Anterior
                            </button>
                            <button style={{
                                background: '#4169E1',
                                color: '#FFFFFF',
                                border: '1px solid #000080',
                                padding: '5px 10px',
                                fontSize: '8px',
                                fontWeight: 'bold'
                            }}>
                                1
                            </button>
                            <button style={{
                                background: '#E0E0E0',
                                color: '#AAAAAA',
                                border: '1px solid #CCCCCC',
                                padding: '5px 10px',
                                fontSize: '8px',
                                cursor: 'not-allowed'
                            }}>
                                Próximo ➡️
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
