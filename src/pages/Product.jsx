import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const Product = ({ addToCart }) => {
    const { id } = useParams();
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [showReviews, setShowReviews] = useState(false);

    // Dados fictícios do produto
    const product = {
        id: parseInt(id),
        title: "O Segredo dos Segredos Secretos: Edição Especial Limitada Premium Gold",
        author: "Dr. Mysterioso dos Santos Silva",
        price: 89.99,
        oldPrice: 45.99,
        category: "Mistério Psicológico Romance Policial",
        images: [
            "https://via.placeholder.com/300x450/FF0000/FFFFFF?text=Capa+Principal",
            "https://via.placeholder.com/300x450/00FF00/000000?text=Verso+da+Capa",
            "https://via.placeholder.com/300x450/0000FF/FFFFFF?text=Páginas+Internas"
        ],
        description: "Este livro revolucionário vai mudar sua vida completamente. Escrito pelo renomado autor Dr. Mysterioso, esta obra prima da literatura moderna combina elementos de mistério, romance, suspense, comédia, drama, ficção científica e autoajuda em uma narrativa única e envolvente que você nunca vai esquecer.",
        fullDescription: "Prepare-se para uma jornada épica através das páginas mais emocionantes já escritas na história da humanidade. Este livro não é apenas um livro, é uma experiência transcendental que vai transformar sua percepção da realidade. Com mais de 500 páginas de pura emoção, aventura e conhecimento, esta obra é indispensável para qualquer pessoa que queira compreender os mistérios mais profundos da existência humana.",
        specifications: {
            pages: "512 páginas (mais ou menos)",
            language: "Português Brasileiro (com algumas palavras em inglês)",
            publisher: "Editora Mega Super Fantástica Ltda",
            isbn: "978-85-123456-78-9",
            dimensions: "14cm x 21cm x 3,2cm",
            weight: "450g (aproximadamente)",
            edition: "1ª Edição Especial Limitada Premium"
        },
        stock: 3,
        rating: 4.7,
        reviewCount: 1247
    };

    const reviews = [
        {
            id: 1,
            user: "LeitoreViciado123",
            rating: 5,
            comment: "MELHOR LIVRO DA MINHA VIDA!!!! Recomendo para todos!!! 10/10!!!",
            date: "15/08/2024"
        },
        {
            id: 2,
            user: "CriticoLiterario",
            rating: 2,
            comment: "Confuso e sem sentido. Não entendi nada.",
            date: "10/08/2024"
        },
        {
            id: 3,
            user: "MariaLeitora",
            rating: 4,
            comment: "Bom livro, mas a entrega demorou 3 meses.",
            date: "05/08/2024"
        }
    ];

    return (
        <div style={{ backgroundColor: '#F0F8FF', minHeight: '100vh', padding: '10px' }}>
            {/* Breadcrumb confuso */}
            <div style={{
                fontSize: '8px',
                color: '#808080',
                marginBottom: '10px',
                backgroundColor: '#FFFACD',
                padding: '5px',
                border: '1px dashed #DDA0DD'
            }}>
                <span>Você está aqui: </span>
                <Link to="/" style={{ color: '#4169E1' }}>Início</Link>
                <span> &gt; </span>
                <Link to="/livros" style={{ color: '#4169E1' }}>Livros</Link>
                <span> &gt; </span>
                <Link to="/categoria/misterio" style={{ color: '#4169E1' }}>Mistério</Link>
                <span> &gt; </span>
                <Link to="/subcategoria/romance" style={{ color: '#4169E1' }}>Romance</Link>
                <span> &gt; </span>
                <Link to="/autor/dr-mysterioso" style={{ color: '#4169E1' }}>Dr. Mysterioso</Link>
                <span> &gt; </span>
                <span style={{ color: '#8B0000' }}>Produto Atual</span>
            </div>

            {/* Layout confuso da página de produto */}
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>

                {/* Coluna da esquerda - Imagens */}
                <div style={{ flex: '0 0 300px' }}>
                    <div style={{
                        border: '3px solid #FF1493',
                        padding: '10px',
                        backgroundColor: '#FFFFE0'
                    }}>
                        <img
                            src={product.images[0]}
                            alt={product.title}
                            style={{
                                width: '100%',
                                height: 'auto',
                                border: '2px solid #000000'
                            }}
                        />

                        {/* Thumbnails confusos */}
                        <div style={{
                            display: 'flex',
                            gap: '5px',
                            marginTop: '10px',
                            justifyContent: 'center'
                        }}>
                            {product.images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`Imagem ${index + 1}`}
                                    style={{
                                        width: '60px',
                                        height: '90px',
                                        border: '1px solid #FF69B4',
                                        cursor: 'pointer'
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Informações técnicas em lugar estranho */}
                    <div style={{
                        marginTop: '20px',
                        backgroundColor: '#E6E6FA',
                        padding: '10px',
                        border: '2px dotted #9370DB',
                        fontSize: '8px'
                    }}>
                        <h4 style={{ color: '#4B0082', fontSize: '10px' }}>
                            Especificações Técnicas Detalhadas
                        </h4>
                        <table style={{ width: '100%', fontSize: '7px' }}>
                            <tr><td>Páginas:</td><td>{product.specifications.pages}</td></tr>
                            <tr><td>Idioma:</td><td>{product.specifications.language}</td></tr>
                            <tr><td>Editora:</td><td>{product.specifications.publisher}</td></tr>
                            <tr><td>ISBN:</td><td>{product.specifications.isbn}</td></tr>
                            <tr><td>Dimensões:</td><td>{product.specifications.dimensions}</td></tr>
                            <tr><td>Peso:</td><td>{product.specifications.weight}</td></tr>
                            <tr><td>Edição:</td><td>{product.specifications.edition}</td></tr>
                        </table>
                    </div>
                </div>

                {/* Coluna central - Informações do produto */}
                <div style={{ flex: '1', minWidth: '300px' }}>
                    <h1 style={{
                        color: '#8B0000',
                        fontSize: '18px',
                        fontFamily: 'Comic Sans MS',
                        lineHeight: '1.1',
                        marginBottom: '5px',
                        textDecoration: 'underline'
                    }}>
                        {product.title}
                    </h1>

                    <p style={{
                        color: '#4B0082',
                        fontSize: '12px',
                        margin: '5px 0'
                    }}>
                        Autor: <strong>{product.author}</strong>
                    </p>

                    <p style={{
                        color: '#006400',
                        fontSize: '10px',
                        margin: '5px 0'
                    }}>
                        Categoria: {product.category}
                    </p>

                    {/* Preços confusos */}
                    <div style={{
                        backgroundColor: '#FFE4E1',
                        padding: '15px',
                        border: '3px solid #FF69B4',
                        margin: '20px 0'
                    }}>
                        <div style={{ textAlign: 'center' }}>
                            <span style={{
                                fontSize: '24px',
                                color: '#FF0000',
                                fontWeight: 'bold'
                            }}>
                                R$ {product.price}
                            </span>
                            <br />
                            <span style={{
                                fontSize: '14px',
                                color: '#00FF00',
                                textDecoration: 'line-through'
                            }}>
                                De: R$ {product.oldPrice}
                            </span>
                            <br />
                            <span style={{
                                fontSize: '10px',
                                color: '#0000FF'
                            }}>
                                Economia de R$ {(product.oldPrice - product.price).toFixed(2)}
                            </span>
                        </div>

                        <p style={{
                            fontSize: '8px',
                            color: '#8B0000',
                            textAlign: 'center',
                            marginTop: '10px'
                        }}>
                            *Preços sujeitos a alteração sem aviso prévio
                        </p>
                    </div>

                    {/* Descrição longa e confusa */}
                    <div style={{
                        backgroundColor: '#F5F5DC',
                        padding: '10px',
                        border: '2px solid #DEB887',
                        marginBottom: '20px'
                    }}>
                        <h3 style={{
                            color: '#8B4513',
                            fontSize: '14px',
                            textAlign: 'center'
                        }}>
                            📖 Descrição Completa do Produto 📖
                        </h3>
                        <p style={{
                            fontSize: '11px',
                            color: '#333333',
                            textAlign: 'justify',
                            lineHeight: '1.3'
                        }}>
                            {product.description}
                        </p>
                        <p style={{
                            fontSize: '9px',
                            color: '#666666',
                            textAlign: 'justify',
                            lineHeight: '1.2',
                            marginTop: '10px'
                        }}>
                            {product.fullDescription}
                        </p>
                    </div>

                    {/* Avaliações */}
                    <div style={{
                        backgroundColor: '#F0FFFF',
                        padding: '10px',
                        border: '2px solid #00CED1'
                    }}>
                        <h3 style={{
                            color: '#008B8B',
                            fontSize: '12px',
                            textAlign: 'center'
                        }}>
                            ⭐ Avaliações dos Clientes ⭐
                        </h3>
                        <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                            <span style={{ fontSize: '16px', color: '#FFD700' }}>
                                ★★★★☆
                            </span>
                            <span style={{ fontSize: '10px', color: '#333333', marginLeft: '10px' }}>
                                {product.rating}/5 ({product.reviewCount} avaliações)
                            </span>
                        </div>

                        <button
                            onClick={() => setShowReviews(!showReviews)}
                            style={{
                                background: '#00CED1',
                                color: '#FFFFFF',
                                border: '1px solid #008B8B',
                                padding: '5px 10px',
                                fontSize: '9px',
                                cursor: 'pointer',
                                display: 'block',
                                margin: '10px auto'
                            }}
                        >
                            {showReviews ? 'Esconder' : 'Ver'} Avaliações
                        </button>

                        {showReviews && (
                            <div style={{ marginTop: '10px' }}>
                                {reviews.map(review => (
                                    <div key={review.id} style={{
                                        backgroundColor: '#FFFFFF',
                                        padding: '8px',
                                        margin: '5px 0',
                                        border: '1px solid #B0E0E6',
                                        fontSize: '8px'
                                    }}>
                                        <div style={{ marginBottom: '3px' }}>
                                            <strong>{review.user}</strong>
                                            <span style={{ marginLeft: '10px', color: '#FFD700' }}>
                                                {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                                            </span>
                                            <span style={{ float: 'right', color: '#666666' }}>
                                                {review.date}
                                            </span>
                                        </div>
                                        <p style={{ margin: '3px 0', color: '#333333' }}>
                                            {review.comment}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Coluna da direita - Compra (mal posicionada) */}
                <div style={{
                    flex: '0 0 250px',
                    backgroundColor: '#FFFAF0',
                    padding: '15px',
                    border: '4px double #FF4500',
                    height: 'fit-content'
                }}>
                    <h3 style={{
                        color: '#FF4500',
                        fontSize: '14px',
                        textAlign: 'center',
                        marginBottom: '15px'
                    }}>
                        🛒 Área de Compra 🛒
                    </h3>

                    {/* Estoque */}
                    <div style={{
                        backgroundColor: product.stock < 5 ? '#FFE4E1' : '#F0FFF0',
                        padding: '8px',
                        border: '2px solid ' + (product.stock < 5 ? '#FF6B6B' : '#90EE90'),
                        marginBottom: '10px',
                        textAlign: 'center'
                    }}>
                        <p style={{
                            fontSize: '10px',
                            color: product.stock < 5 ? '#8B0000' : '#006400',
                            margin: 0
                        }}>
                            {product.stock < 5 ? '⚠️ ÚLTIMAS UNIDADES! ⚠️' : '✅ Em estoque'}
                        </p>
                        <p style={{
                            fontSize: '8px',
                            color: '#666666',
                            margin: '3px 0 0 0'
                        }}>
                            Restam apenas {product.stock} unidades
                        </p>
                    </div>

                    {/* Quantidade */}
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{
                            fontSize: '10px',
                            color: '#333333',
                            display: 'block',
                            marginBottom: '5px'
                        }}>
                            Quantidade:
                        </label>
                        <select
                            value={selectedQuantity}
                            onChange={(e) => setSelectedQuantity(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '5px',
                                fontSize: '9px',
                                border: '2px solid #FF69B4',
                                backgroundColor: '#FFFFE0'
                            }}
                        >
                            {[...Array(Math.min(product.stock, 10))].map((_, i) => (
                                <option key={i + 1} value={i + 1}>{i + 1}</option>
                            ))}
                        </select>
                    </div>

                    {/* Botões de ação mal posicionados */}
                    <div style={{ marginBottom: '15px' }}>
                        <button
                            onClick={() => addToCart({ ...product, quantity: selectedQuantity })}
                            style={{
                                background: 'linear-gradient(45deg, #32CD32, #90EE90)',
                                color: '#000000',
                                border: '3px solid #228B22',
                                padding: '10px',
                                fontSize: '12px',
                                cursor: 'pointer',
                                width: '100%',
                                marginBottom: '8px',
                                fontWeight: 'bold',
                                textShadow: '1px 1px #FFFFFF'
                            }}
                        >
                            🛒 ADICIONAR AO CARRINHO
                        </button>

                        {/* Botão de compra escondido */}
                        <button
                            style={{
                                background: '#FF6B6B',
                                color: '#FFFFFF',
                                border: '1px solid #FF4500',
                                padding: '3px',
                                fontSize: '6px',
                                cursor: 'pointer',
                                width: '50%',
                                float: 'right'
                            }}
                        >
                            Comprar Agora
                        </button>
                    </div>

                    {/* Informações de entrega confusas */}
                    <div style={{
                        backgroundColor: '#E6E6FA',
                        padding: '8px',
                        border: '1px dotted #9370DB',
                        fontSize: '7px'
                    }}>
                        <h4 style={{ fontSize: '8px', color: '#4B0082', margin: '0 0 5px 0' }}>
                            📦 Informações de Entrega
                        </h4>
                        <p style={{ margin: '2px 0' }}>
                            ✓ Frete grátis para compras acima de R$ 299,99
                        </p>
                        <p style={{ margin: '2px 0' }}>
                            ✓ Entrega em 15-30 dias úteis
                        </p>
                        <p style={{ margin: '2px 0' }}>
                            ✓ Retirada em loja (se encontrar a loja)
                        </p>
                        <p style={{ margin: '2px 0', color: '#8B0000' }}>
                            ⚠️ Sujeito à disponibilidade do produto
                        </p>
                    </div>

                    {/* Links relacionados */}
                    <div style={{
                        marginTop: '15px',
                        fontSize: '8px'
                    }}>
                        <h4 style={{ fontSize: '9px', color: '#333333' }}>
                            Links Úteis:
                        </h4>
                        <div>
                            <a href="#" style={{ color: '#4169E1', display: 'block', margin: '2px 0' }}>
                                ❤️ Adicionar aos favoritos
                            </a>
                            <a href="#" style={{ color: '#4169E1', display: 'block', margin: '2px 0' }}>
                                👥 Compartilhar com amigos
                            </a>
                            <a href="#" style={{ color: '#4169E1', display: 'block', margin: '2px 0' }}>
                                📧 Notificar quando disponível
                            </a>
                            <a href="#" style={{ color: '#4169E1', display: 'block', margin: '2px 0' }}>
                                🔗 Link que não funciona
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Produtos relacionados confusos */}
            <div style={{
                marginTop: '40px',
                backgroundColor: '#FFF8DC',
                padding: '20px',
                border: '3px solid #DEB887'
            }}>
                <h3 style={{
                    color: '#8B4513',
                    textAlign: 'center',
                    fontSize: '16px',
                    marginBottom: '20px'
                }}>
                    📚 Produtos Que Talvez Você Goste (Ou Não) 📚
                </h3>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                    gap: '15px'
                }}>
                    {[
                        { id: 2, title: "Manual de Como Não Fazer Nada", price: 45.00 },
                        { id: 3, title: "História da História das Histórias", price: 15.99 },
                        { id: 4, title: "Culinária Extrema", price: 99.99 },
                        { id: 5, title: "Matemática Emocional", price: 78.50 }
                    ].map(item => (
                        <div key={item.id} style={{
                            border: '2px solid #CD853F',
                            padding: '10px',
                            backgroundColor: '#FFFACD',
                            textAlign: 'center'
                        }}>
                            <img
                                src={`https://via.placeholder.com/100x150/8B4513/FFFFFF?text=Livro+${item.id}`}
                                alt={item.title}
                                style={{ width: '80px', height: '120px', marginBottom: '8px' }}
                            />
                            <h4 style={{ fontSize: '9px', color: '#8B4513', margin: '5px 0' }}>
                                {item.title}
                            </h4>
                            <p style={{ fontSize: '11px', color: '#FF0000', fontWeight: 'bold' }}>
                                R$ {item.price}
                            </p>
                            <Link
                                to={`/product/${item.id}`}
                                style={{
                                    background: '#DEB887',
                                    color: '#8B4513',
                                    padding: '3px 6px',
                                    textDecoration: 'none',
                                    fontSize: '7px',
                                    border: '1px solid #CD853F'
                                }}
                            >
                                Ver Produto
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Product;