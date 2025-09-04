import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems = [] }) => {
    const [couponCode, setCouponCode] = useState('');
    const [showShipping, setShowShipping] = useState(false);

    // Simulação de itens no carrinho se estiver vazio
    const defaultItems = cartItems.length === 0 ? [
        {
            id: 1,
            title: "O Segredo dos Segredos Secretos",
            author: "Dr. Mysterioso",
            price: 89.99,
            quantity: 2,
            image: "https://via.placeholder.com/80x120/FF0000/FFFFFF?text=Livro"
        },
        {
            id: 3,
            title: "História da História das Histórias",
            author: "Maria Silva Santos",
            price: 15.99,
            quantity: 1,
            image: "https://via.placeholder.com/80x120/0000FF/FFFFFF?text=Livro"
        }
    ] : cartItems;

    const calculateSubtotal = () => {
        return defaultItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const shipping = 25.90;
    const taxes = calculateSubtotal() * 0.12; // 12% de impostos confusos
    const total = calculateSubtotal() + shipping + taxes;

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
                    🛒 SEU CARRINHO DE COMPRAS 🛒
                </h1>
                <p style={{ color: '#00FFFF', fontSize: '12px', margin: '5px 0' }}>
                    (Página super importante que você quase não encontrou)
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
                <span style={{ color: '#8B0000' }}>Carrinho</span>
                <span style={{ float: 'right', color: '#666666' }}>
                    Última atualização: há 3 minutos atrás
                </span>
            </div>

            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>

                {/* Lista de produtos - layout confuso */}
                <div style={{ flex: '2', minWidth: '400px' }}>
                    <div style={{
                        backgroundColor: '#FFFFFF',
                        border: '3px solid #FF1493',
                        padding: '15px'
                    }}>
                        <h2 style={{
                            color: '#8B0000',
                            fontSize: '16px',
                            textAlign: 'center',
                            backgroundColor: '#FFFF00',
                            padding: '10px',
                            border: '2px solid #FF0000',
                            margin: '0 0 20px 0'
                        }}>
                            📚 ITENS NO SEU CARRINHO (Verifique se está correto) 📚
                        </h2>

                        {defaultItems.length === 0 ? (
                            <div style={{
                                textAlign: 'center',
                                padding: '50px',
                                backgroundColor: '#FFE4E1',
                                border: '2px dashed #FF69B4'
                            }}>
                                <h3 style={{ color: '#8B0000', fontSize: '18px' }}>
                                    😢 Seu carrinho está vazio! 😢
                                </h3>
                                <p style={{ color: '#666666', fontSize: '12px' }}>
                                    Mas não se preocupe, temos milhares de livros esperando por você!
                                </p>
                                <Link
                                    to="/"
                                    style={{
                                        background: '#32CD32',
                                        color: '#FFFFFF',
                                        padding: '10px 20px',
                                        textDecoration: 'none',
                                        fontSize: '14px',
                                        border: '2px solid #228B22',
                                        marginTop: '15px',
                                        display: 'inline-block'
                                    }}
                                >
                                    🏠 Voltar às Compras
                                </Link>
                            </div>
                        ) : (
                            <div>
                                {defaultItems.map((item, index) => (
                                    <div key={item.id} style={{
                                        display: 'flex',
                                        gap: '15px',
                                        padding: '15px',
                                        marginBottom: '15px',
                                        backgroundColor: index % 2 === 0 ? '#F0F8FF' : '#FFF8DC',
                                        border: '2px solid ' + (index % 2 === 0 ? '#87CEEB' : '#F0E68C'),
                                        position: 'relative'
                                    }}>
                                        {/* Imagem do produto */}
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            style={{
                                                width: '80px',
                                                height: '120px',
                                                border: '2px solid #000000'
                                            }}
                                        />

                                        {/* Informações do produto */}
                                        <div style={{ flex: 1 }}>
                                            <h3 style={{
                                                fontSize: '12px',
                                                color: '#8B0000',
                                                margin: '0 0 5px 0',
                                                textDecoration: 'underline'
                                            }}>
                                                {item.title}
                                            </h3>
                                            <p style={{
                                                fontSize: '10px',
                                                color: '#4B0082',
                                                margin: '3px 0'
                                            }}>
                                                Autor: {item.author}
                                            </p>
                                            <p style={{
                                                fontSize: '14px',
                                                color: '#FF0000',
                                                fontWeight: 'bold',
                                                margin: '5px 0'
                                            }}>
                                                R$ {item.price.toFixed(2)}
                                            </p>

                                            {/* Controles de quantidade confusos */}
                                            <div style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '5px',
                                                marginTop: '10px'
                                            }}>
                                                <span style={{ fontSize: '10px', color: '#333333' }}>
                                                    Qtd:
                                                </span>
                                                <button style={{
                                                    background: '#FF6B6B',
                                                    color: '#FFFFFF',
                                                    border: '1px solid #FF0000',
                                                    padding: '2px 6px',
                                                    fontSize: '10px',
                                                    cursor: 'pointer'
                                                }}>
                                                    -
                                                </button>
                                                <input
                                                    type="text"
                                                    value={item.quantity}
                                                    style={{
                                                        width: '30px',
                                                        textAlign: 'center',
                                                        fontSize: '10px',
                                                        border: '2px solid #FF69B4',
                                                        backgroundColor: '#FFFFE0'
                                                    }}
                                                    readOnly
                                                />
                                                <button style={{
                                                    background: '#32CD32',
                                                    color: '#FFFFFF',
                                                    border: '1px solid #228B22',
                                                    padding: '2px 6px',
                                                    fontSize: '10px',
                                                    cursor: 'pointer'
                                                }}>
                                                    +
                                                </button>
                                            </div>

                                            {/* Subtotal do item */}
                                            <p style={{
                                                fontSize: '12px',
                                                color: '#006400',
                                                fontWeight: 'bold',
                                                marginTop: '8px'
                                            }}>
                                                Subtotal: R$ {(item.price * item.quantity).toFixed(2)}
                                            </p>
                                        </div>

                                        {/* Botão remover escondido */}
                                        <button style={{
                                            position: 'absolute',
                                            top: '5px',
                                            right: '5px',
                                            background: 'transparent',
                                            border: 'none',
                                            fontSize: '8px',
                                            color: '#999999',
                                            cursor: 'pointer'
                                        }}>
                                            ✕
                                        </button>
                                    </div>
                                ))}

                                {/* Ações confusas */}
                                <div style={{
                                    display: 'flex',
                                    gap: '10px',
                                    marginTop: '20px',
                                    justifyContent: 'space-between'
                                }}>
                                    <button style={{
                                        background: '#DDA0DD',
                                        color: '#4B0082',
                                        border: '2px solid #9370DB',
                                        padding: '8px 15px',
                                        fontSize: '10px',
                                        cursor: 'pointer'
                                    }}>
                                        🔄 Atualizar Carrinho
                                    </button>

                                    <button style={{
                                        background: '#F0E68C',
                                        color: '#8B4513',
                                        border: '2px solid #DEB887',
                                        padding: '8px 15px',
                                        fontSize: '10px',
                                        cursor: 'pointer'
                                    }}>
                                        💾 Salvar para Depois
                                    </button>

                                    <Link
                                        to="/"
                                        style={{
                                            background: '#87CEEB',
                                            color: '#000080',
                                            border: '2px solid #4682B4',
                                            padding: '8px 15px',
                                            fontSize: '10px',
                                            textDecoration: 'none'
                                        }}
                                    >
                                        🏠 Continuar Comprando
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Resumo da compra - sidebar confusa */}
                <div style={{ flex: '1', minWidth: '300px' }}>
                    <div style={{
                        backgroundColor: '#FFFAF0',
                        border: '4px double #FF4500',
                        padding: '15px',
                        marginBottom: '20px'
                    }}>
                        <h3 style={{
                            color: '#FF4500',
                            fontSize: '14px',
                            textAlign: 'center',
                            marginBottom: '15px',
                            backgroundColor: '#FFE4E1',
                            padding: '8px',
                            border: '2px solid #FF6B6B'
                        }}>
                            💰 RESUMO DO PEDIDO 💰
                        </h3>

                        <div style={{ fontSize: '11px', lineHeight: '1.5' }}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginBottom: '5px',
                                paddingBottom: '5px',
                                borderBottom: '1px dotted #DDA0DD'
                            }}>
                                <span style={{ color: '#333333' }}>Subtotal ({defaultItems.length} itens):</span>
                                <span style={{ color: '#006400', fontWeight: 'bold' }}>
                                    R$ {calculateSubtotal().toFixed(2)}
                                </span>
                            </div>

                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginBottom: '5px',
                                paddingBottom: '5px',
                                borderBottom: '1px dotted #DDA0DD'
                            }}>
                                <span style={{ color: '#333333' }}>Frete e Manuseio:</span>
                                <span style={{ color: '#FF4500', fontWeight: 'bold' }}>
                                    R$ {shipping.toFixed(2)}
                                </span>
                            </div>

                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginBottom: '5px',
                                paddingBottom: '5px',
                                borderBottom: '1px dotted #DDA0DD'
                            }}>
                                <span style={{ color: '#333333', fontSize: '9px' }}>
                                    Impostos e Taxas (12%):
                                </span>
                                <span style={{ color: '#8B0000', fontWeight: 'bold' }}>
                                    R$ {taxes.toFixed(2)}
                                </span>
                            </div>

                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginTop: '15px',
                                paddingTop: '10px',
                                borderTop: '3px solid #FF4500',
                                backgroundColor: '#FFE4E1',
                                padding: '10px'
                            }}>
                                <span style={{
                                    color: '#8B0000',
                                    fontWeight: 'bold',
                                    fontSize: '14px'
                                }}>
                                    TOTAL:
                                </span>
                                <span style={{
                                    color: '#FF0000',
                                    fontWeight: 'bold',
                                    fontSize: '16px'
                                }}>
                                    R$ {total.toFixed(2)}
                                </span>
                            </div>
                        </div>

                        {/* Cupom de desconto */}
                        <div style={{
                            marginTop: '20px',
                            backgroundColor: '#F0F8FF',
                            padding: '10px',
                            border: '2px dashed #87CEEB'
                        }}>
                            <h4 style={{
                                fontSize: '10px',
                                color: '#4682B4',
                                margin: '0 0 8px 0'
                            }}>
                                🎫 Cupom de Desconto
                            </h4>
                            <div style={{ display: 'flex', gap: '5px' }}>
                                <input
                                    type="text"
                                    placeholder="Digite o código"
                                    value={couponCode}
                                    onChange={(e) => setCouponCode(e.target.value)}
                                    style={{
                                        flex: 1,
                                        fontSize: '8px',
                                        padding: '3px',
                                        border: '2px solid #87CEEB',
                                        backgroundColor: '#F8F8FF'
                                    }}
                                />
                                <button style={{
                                    background: '#4682B4',
                                    color: '#FFFFFF',
                                    border: '1px solid #000080',
                                    padding: '3px 8px',
                                    fontSize: '8px',
                                    cursor: 'pointer'
                                }}>
                                    Aplicar
                                </button>
                            </div>
                            <p style={{
                                fontSize: '7px',
                                color: '#666666',
                                margin: '5px 0 0 0'
                            }}>
                                Experimente: DESCONTO10, PROMO50, QUEBRADO
                            </p>
                        </div>

                        {/* Botão de finalizar mal posicionado */}
                        <div style={{ marginTop: '25px' }}>
                            <Link
                                to="/checkout"
                                style={{
                                    background: 'linear-gradient(45deg, #FF6B6B, #FF4500)',
                                    color: '#FFFFFF',
                                    padding: '15px',
                                    textDecoration: 'none',
                                    fontSize: '14px',
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    display: 'block',
                                    border: '3px solid #8B0000',
                                    textShadow: '1px 1px #000000',
                                    animation: 'blink 2s infinite'
                                }}
                            >
                                🛒 FINALIZAR COMPRA 🛒
                            </Link>

                            {/* Botão de continuar comprando escondido */}
                            <Link
                                to="/"
                                style={{
                                    background: '#F5F5F5',
                                    color: '#E0E0E0',
                                    padding: '5px',
                                    textDecoration: 'none',
                                    fontSize: '8px',
                                    textAlign: 'center',
                                    display: 'block',
                                    marginTop: '10px',
                                    border: '1px solid #F0F0F0'
                                }}
                            >
                                Continuar Comprando
                            </Link>
                        </div>
                    </div>

                    {/* Calculadora de frete confusa */}
                    <div style={{
                        backgroundColor: '#E6E6FA',
                        border: '2px solid #9370DB',
                        padding: '15px'
                    }}>
                        <h4 style={{
                            fontSize: '12px',
                            color: '#4B0082',
                            margin: '0 0 10px 0',
                            textAlign: 'center'
                        }}>
                            📦 Calcular Frete 📦
                        </h4>

                        <button
                            onClick={() => setShowShipping(!showShipping)}
                            style={{
                                background: '#9370DB',
                                color: '#FFFFFF',
                                border: '1px solid #4B0082',
                                padding: '8px',
                                fontSize: '9px',
                                cursor: 'pointer',
                                width: '100%',
                                marginBottom: '10px'
                            }}
                        >
                            {showShipping ? 'Esconder' : 'Mostrar'} Opções de Frete
                        </button>

                        {showShipping && (
                            <div style={{ fontSize: '9px' }}>
                                <input
                                    type="text"
                                    placeholder="CEP (apenas números)"
                                    style={{
                                        width: '100%',
                                        padding: '5px',
                                        fontSize: '8px',
                                        border: '2px solid #9370DB',
                                        backgroundColor: '#F8F8FF',
                                        marginBottom: '8px'
                                    }}
                                />
                                <div style={{
                                    backgroundColor: '#F0F0F0',
                                    padding: '8px',
                                    border: '1px solid #CCCCCC'
                                }}>
                                    <p style={{ margin: '2px 0', color: '#006400' }}>
                                        📮 PAC: R$ 25,90 (15-20 dias úteis)
                                    </p>
                                    <p style={{ margin: '2px 0', color: '#FF4500' }}>
                                        🚚 SEDEX: R$ 45,90 (3-5 dias úteis)
                                    </p>
                                    <p style={{ margin: '2px 0', color: '#8B0000' }}>
                                        🏃 Expresso: R$ 89,90 (1-2 dias úteis)
                                    </p>
                                    <p style={{
                                        margin: '5px 0 0 0',
                                        fontSize: '7px',
                                        color: '#666666'
                                    }}>
                                        *Valores aproximados, sujeitos a alteração
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Produtos recomendados confusos */}
            <div style={{
                marginTop: '40px',
                backgroundColor: '#FFFACD',
                padding: '20px',
                border: '3px solid #F0E68C'
            }}>
                <h3 style={{
                    color: '#8B4513',
                    textAlign: 'center',
                    fontSize: '16px',
                    marginBottom: '20px',
                    backgroundColor: '#FFE4B5',
                    padding: '10px',
                    border: '2px solid #DEB887'
                }}>
                    📚 Quem Comprou Isso Também Comprou (Talvez) 📚
                </h3>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                    gap: '15px'
                }}>
                    {[
                        { id: 4, title: "Culinária Extrema", price: 99.99 },
                        { id: 5, title: "Matemática Emocional", price: 78.50 },
                        { id: 6, title: "Manual de Confusão", price: 55.00 }
                    ].map(item => (
                        <div key={item.id} style={{
                            border: '2px solid #DEB887',
                            padding: '8px',
                            backgroundColor: '#FFF8DC',
                            textAlign: 'center'
                        }}>
                            <img
                                src={`https://via.placeholder.com/80x120/F0E68C/8B4513?text=Livro+${item.id}`}
                                alt={item.title}
                                style={{ width: '60px', height: '90px', marginBottom: '5px' }}
                            />
                            <h4 style={{ fontSize: '8px', color: '#8B4513', margin: '3px 0' }}>
                                {item.title}
                            </h4>
                            <p style={{ fontSize: '10px', color: '#FF0000', fontWeight: 'bold' }}>
                                R$ {item.price}
                            </p>
                            <button style={{
                                background: '#F0E68C',
                                color: '#8B4513',
                                padding: '2px 4px',
                                fontSize: '7px',
                                border: '1px solid #DEB887',
                                cursor: 'pointer'
                            }}>
                                + Carrinho
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Cart;