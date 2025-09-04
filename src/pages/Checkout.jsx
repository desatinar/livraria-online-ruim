import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        // Dados pessoais
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        cpf: '',
        birthDate: '',

        // Endereço
        zipCode: '',
        street: '',
        number: '',
        complement: '',
        neighborhood: '',
        city: '',
        state: '',

        // Pagamento
        paymentMethod: '',
        cardNumber: '',
        cardName: '',
        expiryDate: '',
        cvv: '',
        installments: '1'
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simula erro proposital
        alert('ERRO: Algo deu errado! Tente novamente em 24 horas.');
    };

    const orderSummary = {
        items: [
            { title: "O Segredo dos Segredos Secretos", price: 89.99, quantity: 2 },
            { title: "História da História das Histórias", price: 15.99, quantity: 1 }
        ],
        subtotal: 195.97,
        shipping: 25.90,
        taxes: 23.52,
        total: 245.39
    };

    return (
        <div style={{ backgroundColor: '#F0F8FF', minHeight: '100vh', padding: '10px' }}>
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
                    💳 FINALIZAR COMPRA (PROCESSO SUPER SEGURO) 💳
                </h1>
                <p style={{ color: '#00FFFF', fontSize: '10px', margin: '5px 0' }}>
                    Última etapa! (Ou não... depende se der certo)
                </p>
            </div>

            {/* Barra de progresso confusa */}
            <div style={{
                backgroundColor: '#E0E0E0',
                padding: '15px',
                border: '2px solid #808080',
                marginBottom: '20px',
                textAlign: 'center'
            }}>
                <h3 style={{ color: '#333333', fontSize: '12px', margin: '0 0 10px 0' }}>
                    Progresso do Pedido (Atual: Etapa {currentStep} de 5)
                </h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '8px' }}>
                    <div style={{
                        color: currentStep >= 1 ? '#00FF00' : '#999999',
                        fontWeight: currentStep === 1 ? 'bold' : 'normal'
                    }}>
                        1. Dados Pessoais
                    </div>
                    <div style={{
                        color: currentStep >= 2 ? '#00FF00' : '#999999',
                        fontWeight: currentStep === 2 ? 'bold' : 'normal'
                    }}>
                        2. Endereço
                    </div>
                    <div style={{
                        color: currentStep >= 3 ? '#00FF00' : '#999999',
                        fontWeight: currentStep === 3 ? 'bold' : 'normal'
                    }}>
                        3. Entrega
                    </div>
                    <div style={{
                        color: currentStep >= 4 ? '#00FF00' : '#999999',
                        fontWeight: currentStep === 4 ? 'bold' : 'normal'
                    }}>
                        4. Pagamento
                    </div>
                    <div style={{
                        color: currentStep >= 5 ? '#00FF00' : '#999999',
                        fontWeight: currentStep === 5 ? 'bold' : 'normal'
                    }}>
                        5. Confirmação
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>

                {/* Formulário principal */}
                <div style={{ flex: '2', minWidth: '400px' }}>
                    <form onSubmit={handleSubmit} style={{
                        backgroundColor: '#FFFFFF',
                        border: '3px solid #FF1493',
                        padding: '20px'
                    }}>

                        {/* Etapa 1: Dados Pessoais */}
                        {currentStep === 1 && (
                            <div>
                                <h2 style={{
                                    color: '#8B0000',
                                    fontSize: '16px',
                                    backgroundColor: '#FFFF00',
                                    padding: '10px',
                                    border: '2px solid #FF0000',
                                    textAlign: 'center',
                                    margin: '0 0 20px 0'
                                }}>
                                    📝 SEUS DADOS PESSOAIS 📝
                                </h2>

                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr',
                                    gap: '10px',
                                    marginBottom: '15px'
                                }}>
                                    <div>
                                        <label style={{
                                            fontSize: '9px',
                                            color: '#8B0000',
                                            display: 'block',
                                            marginBottom: '2px'
                                        }}>
                                            Nome*
                                        </label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            style={{
                                                width: '90%',
                                                padding: '3px',
                                                fontSize: '10px',
                                                border: '2px solid #FF69B4',
                                                backgroundColor: '#FFFFE0'
                                            }}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label style={{
                                            fontSize: '9px',
                                            color: '#8B0000',
                                            display: 'block',
                                            marginBottom: '2px'
                                        }}>
                                            Sobrenome*
                                        </label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            style={{
                                                width: '90%',
                                                padding: '3px',
                                                fontSize: '10px',
                                                border: '2px solid #FF69B4',
                                                backgroundColor: '#FFFFE0'
                                            }}
                                            required
                                        />
                                    </div>
                                </div>

                                <div style={{ marginBottom: '15px' }}>
                                    <label style={{
                                        fontSize: '9px',
                                        color: '#8B0000',
                                        display: 'block',
                                        marginBottom: '2px'
                                    }}>
                                        E-mail para spam* (será usado para enviar promoções)
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="seuemail@exemplo.com"
                                        style={{
                                            width: '95%',
                                            padding: '3px',
                                            fontSize: '10px',
                                            border: '2px solid #FF69B4',
                                            backgroundColor: '#FFFFE0'
                                        }}
                                        required
                                    />
                                </div>

                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr',
                                    gap: '10px',
                                    marginBottom: '15px'
                                }}>
                                    <div>
                                        <label style={{
                                            fontSize: '9px',
                                            color: '#8B0000',
                                            display: 'block',
                                            marginBottom: '2px'
                                        }}>
                                            Telefone* (com DDD)
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="(11) 99999-9999"
                                            style={{
                                                width: '90%',
                                                padding: '3px',
                                                fontSize: '10px',
                                                border: '2px solid #FF69B4',
                                                backgroundColor: '#FFFFE0'
                                            }}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label style={{
                                            fontSize: '9px',
                                            color: '#8B0000',
                                            display: 'block',
                                            marginBottom: '2px'
                                        }}>
                                            CPF* (apenas números)
                                        </label>
                                        <input
                                            type="text"
                                            name="cpf"
                                            value={formData.cpf}
                                            onChange={handleInputChange}
                                            placeholder="12345678901"
                                            style={{
                                                width: '90%',
                                                padding: '3px',
                                                fontSize: '10px',
                                                border: '2px solid #FF69B4',
                                                backgroundColor: '#FFFFE0'
                                            }}
                                            required
                                        />
                                    </div>
                                </div>

                                <div style={{ marginBottom: '20px' }}>
                                    <label style={{
                                        fontSize: '9px',
                                        color: '#8B0000',
                                        display: 'block',
                                        marginBottom: '2px'
                                    }}>
                                        Data de Nascimento* (para verificar se é maior de idade)
                                    </label>
                                    <input
                                        type="date"
                                        name="birthDate"
                                        value={formData.birthDate}
                                        onChange={handleInputChange}
                                        style={{
                                            padding: '3px',
                                            fontSize: '10px',
                                            border: '2px solid #FF69B4',
                                            backgroundColor: '#FFFFE0'
                                        }}
                                        required
                                    />
                                </div>

                                <div style={{ textAlign: 'center' }}>
                                    <button
                                        type="button"
                                        onClick={() => setCurrentStep(2)}
                                        style={{
                                            background: '#32CD32',
                                            color: '#FFFFFF',
                                            border: '2px solid #228B22',
                                            padding: '10px 20px',
                                            fontSize: '12px',
                                            cursor: 'pointer',
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        Próximo: Endereço ➡️
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Etapa 2: Endereço */}
                        {currentStep === 2 && (
                            <div>
                                <h2 style={{
                                    color: '#8B0000',
                                    fontSize: '16px',
                                    backgroundColor: '#FFFF00',
                                    padding: '10px',
                                    border: '2px solid #FF0000',
                                    textAlign: 'center',
                                    margin: '0 0 20px 0'
                                }}>
                                    🏠 ENDEREÇO DE ENTREGA 🏠
                                </h2>

                                <div style={{ marginBottom: '15px' }}>
                                    <label style={{
                                        fontSize: '9px',
                                        color: '#8B0000',
                                        display: 'block',
                                        marginBottom: '2px'
                                    }}>
                                        CEP* (apenas números, sem traço)
                                    </label>
                                    <input
                                        type="text"
                                        name="zipCode"
                                        value={formData.zipCode}
                                        onChange={handleInputChange}
                                        placeholder="12345678"
                                        maxLength="8"
                                        style={{
                                            width: '150px',
                                            padding: '3px',
                                            fontSize: '10px',
                                            border: '2px solid #FF69B4',
                                            backgroundColor: '#FFFFE0'
                                        }}
                                        required
                                    />
                                    <button
                                        type="button"
                                        style={{
                                            background: '#87CEEB',
                                            color: '#000080',
                                            border: '1px solid #4682B4',
                                            padding: '3px 8px',
                                            fontSize: '8px',
                                            marginLeft: '10px',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        Buscar CEP
                                    </button>
                                </div>

                                <div style={{ marginBottom: '15px' }}>
                                    <label style={{
                                        fontSize: '9px',
                                        color: '#8B0000',
                                        display: 'block',
                                        marginBottom: '2px'
                                    }}>
                                        Endereço Completo*
                                    </label>
                                    <input
                                        type="text"
                                        name="street"
                                        value={formData.street}
                                        onChange={handleInputChange}
                                        placeholder="Rua das Flores, 123"
                                        style={{
                                            width: '95%',
                                            padding: '3px',
                                            fontSize: '10px',
                                            border: '2px solid #FF69B4',
                                            backgroundColor: '#FFFFE0'
                                        }}
                                        required
                                    />
                                </div>

                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: '100px 1fr',
                                    gap: '10px',
                                    marginBottom: '15px'
                                }}>
                                    <div>
                                        <label style={{
                                            fontSize: '9px',
                                            color: '#8B0000',
                                            display: 'block',
                                            marginBottom: '2px'
                                        }}>
                                            Número*
                                        </label>
                                        <input
                                            type="text"
                                            name="number"
                                            value={formData.number}
                                            onChange={handleInputChange}
                                            placeholder="123"
                                            style={{
                                                width: '90%',
                                                padding: '3px',
                                                fontSize: '10px',
                                                border: '2px solid #FF69B4',
                                                backgroundColor: '#FFFFE0'
                                            }}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label style={{
                                            fontSize: '9px',
                                            color: '#8B0000',
                                            display: 'block',
                                            marginBottom: '2px'
                                        }}>
                                            Complemento (Apto, Bloco, etc.)
                                        </label>
                                        <input
                                            type="text"
                                            name="complement"
                                            value={formData.complement}
                                            onChange={handleInputChange}
                                            placeholder="Apto 101, Bloco A"
                                            style={{
                                                width: '95%',
                                                padding: '3px',
                                                fontSize: '10px',
                                                border: '2px solid #FF69B4',
                                                backgroundColor: '#FFFFE0'
                                            }}
                                        />
                                    </div>
                                </div>

                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr 100px',
                                    gap: '10px',
                                    marginBottom: '20px'
                                }}>
                                    <div>
                                        <label style={{
                                            fontSize: '9px',
                                            color: '#8B0000',
                                            display: 'block',
                                            marginBottom: '2px'
                                        }}>
                                            Bairro*
                                        </label>
                                        <input
                                            type="text"
                                            name="neighborhood"
                                            value={formData.neighborhood}
                                            onChange={handleInputChange}
                                            placeholder="Centro"
                                            style={{
                                                width: '90%',
                                                padding: '3px',
                                                fontSize: '10px',
                                                border: '2px solid #FF69B4',
                                                backgroundColor: '#FFFFE0'
                                            }}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label style={{
                                            fontSize: '9px',
                                            color: '#8B0000',
                                            display: 'block',
                                            marginBottom: '2px'
                                        }}>
                                            Cidade*
                                        </label>
                                        <input
                                            type="text"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleInputChange}
                                            placeholder="São Paulo"
                                            style={{
                                                width: '90%',
                                                padding: '3px',
                                                fontSize: '10px',
                                                border: '2px solid #FF69B4',
                                                backgroundColor: '#FFFFE0'
                                            }}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label style={{
                                            fontSize: '9px',
                                            color: '#8B0000',
                                            display: 'block',
                                            marginBottom: '2px'
                                        }}>
                                            UF*
                                        </label>
                                        <select
                                            name="state"
                                            value={formData.state}
                                            onChange={handleInputChange}
                                            style={{
                                                width: '90%',
                                                padding: '3px',
                                                fontSize: '10px',
                                                border: '2px solid #FF69B4',
                                                backgroundColor: '#FFFFE0'
                                            }}
                                            required
                                        >
                                            <option value="">UF</option>
                                            <option value="SP">SP</option>
                                            <option value="RJ">RJ</option>
                                            <option value="MG">MG</option>
                                            <option value="RS">RS</option>
                                            <option value="PR">PR</option>
                                            <option value="SC">SC</option>
                                            <option value="outros">Outros...</option>
                                        </select>
                                    </div>
                                </div>

                                <div style={{ textAlign: 'center', display: 'flex', gap: '10px', justifyContent: 'center' }}>
                                    <button
                                        type="button"
                                        onClick={() => setCurrentStep(1)}
                                        style={{
                                            background: '#DDA0DD',
                                            color: '#4B0082',
                                            border: '2px solid #9370DB',
                                            padding: '8px 15px',
                                            fontSize: '10px',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        ⬅️ Voltar
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setCurrentStep(4)}
                                        style={{
                                            background: '#32CD32',
                                            color: '#FFFFFF',
                                            border: '2px solid #228B22',
                                            padding: '10px 20px',
                                            fontSize: '12px',
                                            cursor: 'pointer',
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        Próximo: Pagamento ➡️
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Etapa 4: Pagamento (pulando a etapa 3 para confundir) */}
                        {currentStep === 4 && (
                            <div>
                                <h2 style={{
                                    color: '#8B0000',
                                    fontSize: '16px',
                                    backgroundColor: '#FFFF00',
                                    padding: '10px',
                                    border: '2px solid #FF0000',
                                    textAlign: 'center',
                                    margin: '0 0 20px 0'
                                }}>
                                    💳 FORMA DE PAGAMENTO 💳
                                </h2>

                                <div style={{ marginBottom: '20px' }}>
                                    <h3 style={{ fontSize: '12px', color: '#333333', marginBottom: '10px' }}>
                                        Escolha como pagar:
                                    </h3>

                                    <div style={{ marginBottom: '10px' }}>
                                        <label style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            fontSize: '11px',
                                            margin: '5px 0',
                                            cursor: 'pointer'
                                        }}>
                                            <input
                                                type="radio"
                                                name="paymentMethod"
                                                value="credit"
                                                checked={formData.paymentMethod === 'credit'}
                                                onChange={handleInputChange}
                                                style={{ marginRight: '8px' }}
                                            />
                                            💳 Cartão de Crédito (em até 12x sem juros*)
                                        </label>
                                        <label style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            fontSize: '11px',
                                            margin: '5px 0',
                                            cursor: 'pointer'
                                        }}>
                                            <input
                                                type="radio"
                                                name="paymentMethod"
                                                value="debit"
                                                checked={formData.paymentMethod === 'debit'}
                                                onChange={handleInputChange}
                                                style={{ marginRight: '8px' }}
                                            />
                                            💳 Cartão de Débito (à vista)
                                        </label>
                                        <label style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            fontSize: '11px',
                                            margin: '5px 0',
                                            cursor: 'pointer'
                                        }}>
                                            <input
                                                type="radio"
                                                name="paymentMethod"
                                                value="pix"
                                                checked={formData.paymentMethod === 'pix'}
                                                onChange={handleInputChange}
                                                style={{ marginRight: '8px' }}
                                            />
                                            📱 PIX (5% de desconto)
                                        </label>
                                        <label style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            fontSize: '11px',
                                            margin: '5px 0',
                                            cursor: 'pointer'
                                        }}>
                                            <input
                                                type="radio"
                                                name="paymentMethod"
                                                value="boleto"
                                                checked={formData.paymentMethod === 'boleto'}
                                                onChange={handleInputChange}
                                                style={{ marginRight: '8px' }}
                                            />
                                            🎫 Boleto Bancário (vencimento em 3 dias)
                                        </label>
                                    </div>
                                </div>

                                {/* Campos do cartão (aparecem independente da seleção) */}
                                <div style={{
                                    backgroundColor: '#F0F8FF',
                                    padding: '15px',
                                    border: '2px dashed #87CEEB',
                                    marginBottom: '20px'
                                }}>
                                    <h4 style={{ fontSize: '12px', color: '#4682B4', marginBottom: '15px' }}>
                                        📋 Dados do Cartão (preencha mesmo se não for usar cartão)
                                    </h4>

                                    <div style={{ marginBottom: '15px' }}>
                                        <label style={{
                                            fontSize: '9px',
                                            color: '#8B0000',
                                            display: 'block',
                                            marginBottom: '2px'
                                        }}>
                                            Número do Cartão* (16 dígitos sem espaços)
                                        </label>
                                        <input
                                            type="text"
                                            name="cardNumber"
                                            value={formData.cardNumber}
                                            onChange={handleInputChange}
                                            placeholder="1234567890123456"
                                            maxLength="16"
                                            style={{
                                                width: '300px',
                                                padding: '5px',
                                                fontSize: '12px',
                                                border: '2px solid #87CEEB',
                                                backgroundColor: '#F8F8FF',
                                                letterSpacing: '2px'
                                            }}
                                        />
                                    </div>

                                    <div style={{ marginBottom: '15px' }}>
                                        <label style={{
                                            fontSize: '9px',
                                            color: '#8B0000',
                                            display: 'block',
                                            marginBottom: '2px'
                                        }}>
                                            Nome no Cartão* (exatamente como está impresso)
                                        </label>
                                        <input
                                            type="text"
                                            name="cardName"
                                            value={formData.cardName}
                                            onChange={handleInputChange}
                                            placeholder="JOÃO DA SILVA"
                                            style={{
                                                width: '300px',
                                                padding: '5px',
                                                fontSize: '10px',
                                                border: '2px solid #87CEEB',
                                                backgroundColor: '#F8F8FF',
                                                textTransform: 'uppercase'
                                            }}
                                        />
                                    </div>

                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: '150px 100px 1fr',
                                        gap: '10px',
                                        marginBottom: '15px'
                                    }}>
                                        <div>
                                            <label style={{
                                                fontSize: '9px',
                                                color: '#8B0000',
                                                display: 'block',
                                                marginBottom: '2px'
                                            }}>
                                                Validade* (MM/AA)
                                            </label>
                                            <input
                                                type="text"
                                                name="expiryDate"
                                                value={formData.expiryDate}
                                                onChange={handleInputChange}
                                                placeholder="12/29"
                                                maxLength="5"
                                                style={{
                                                    width: '90%',
                                                    padding: '5px',
                                                    fontSize: '10px',
                                                    border: '2px solid #87CEEB',
                                                    backgroundColor: '#F8F8FF'
                                                }}
                                            />
                                        </div>
                                        <div>
                                            <label style={{
                                                fontSize: '9px',
                                                color: '#8B0000',
                                                display: 'block',
                                                marginBottom: '2px'
                                            }}>
                                                CVV* (3 dígitos)
                                            </label>
                                            <input
                                                type="password"
                                                name="cvv"
                                                value={formData.cvv}
                                                onChange={handleInputChange}
                                                placeholder="123"
                                                maxLength="3"
                                                style={{
                                                    width: '90%',
                                                    padding: '5px',
                                                    fontSize: '10px',
                                                    border: '2px solid #87CEEB',
                                                    backgroundColor: '#F8F8FF'
                                                }}
                                            />
                                        </div>
                                        <div>
                                            <label style={{
                                                fontSize: '9px',
                                                color: '#8B0000',
                                                display: 'block',
                                                marginBottom: '2px'
                                            }}>
                                                Parcelas*
                                            </label>
                                            <select
                                                name="installments"
                                                value={formData.installments}
                                                onChange={handleInputChange}
                                                style={{
                                                    width: '100%',
                                                    padding: '5px',
                                                    fontSize: '10px',
                                                    border: '2px solid #87CEEB',
                                                    backgroundColor: '#F8F8FF'
                                                }}
                                            >
                                                <option value="1">1x de R$ 245,39</option>
                                                <option value="2">2x de R$ 122,70</option>
                                                <option value="3">3x de R$ 81,80</option>
                                                <option value="6">6x de R$ 40,90</option>
                                                <option value="12">12x de R$ 20,45</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ textAlign: 'center', display: 'flex', gap: '10px', justifyContent: 'center' }}>
                                    <button
                                        type="button"
                                        onClick={() => setCurrentStep(2)}
                                        style={{
                                            background: '#DDA0DD',
                                            color: '#4B0082',
                                            border: '2px solid #9370DB',
                                            padding: '8px 15px',
                                            fontSize: '10px',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        ⬅️ Voltar
                                    </button>
                                    <button
                                        type="submit"
                                        style={{
                                            background: 'linear-gradient(45deg, #FF6B6B, #FF4500)',
                                            color: '#FFFFFF',
                                            border: '3px solid #8B0000',
                                            padding: '15px 30px',
                                            fontSize: '14px',
                                            cursor: 'pointer',
                                            fontWeight: 'bold',
                                            textShadow: '1px 1px #000000',
                                            animation: 'blink 2s infinite'
                                        }}
                                    >
                                        💳 FINALIZAR PEDIDO 💳
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Botões escondidos e confusos */}
                        <div style={{
                            marginTop: '30px',
                            textAlign: 'center',
                            fontSize: '8px'
                        }}>
                            <button
                                type="button"
                                style={{
                                    background: '#F5F5F5',
                                    color: '#E0E0E0',
                                    border: '1px solid #F0F0F0',
                                    padding: '2px 4px',
                                    fontSize: '6px',
                                    cursor: 'pointer',
                                    marginRight: '10px'
                                }}
                            >
                                Cancelar Pedido
                            </button>
                            <button
                                type="button"
                                style={{
                                    background: 'transparent',
                                    color: 'transparent',
                                    border: 'none',
                                    padding: '2px 4px',
                                    fontSize: '6px',
                                    cursor: 'pointer'
                                }}
                            >
                                Salvar Rascunho
                            </button>
                        </div>
                    </form>
                </div>

                {/* Resumo do pedido - sidebar */}
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
                            📋 RESUMO DO SEU PEDIDO 📋
                        </h3>

                        <div style={{ fontSize: '10px', marginBottom: '15px' }}>
                            {orderSummary.items.map((item, index) => (
                                <div key={index} style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    marginBottom: '8px',
                                    paddingBottom: '5px',
                                    borderBottom: '1px dotted #DDA0DD'
                                }}>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ color: '#8B0000', fontWeight: 'bold' }}>
                                            {item.title}
                                        </div>
                                        <div style={{ color: '#666666', fontSize: '8px' }}>
                                            Quantidade: {item.quantity}
                                        </div>
                                    </div>
                                    <div style={{ color: '#006400', fontWeight: 'bold' }}>
                                        R$ {(item.price * item.quantity).toFixed(2)}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div style={{ fontSize: '11px', lineHeight: '1.5' }}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginBottom: '5px',
                                paddingBottom: '5px',
                                borderBottom: '1px dotted #DDA0DD'
                            }}>
                                <span style={{ color: '#333333' }}>Subtotal:</span>
                                <span style={{ color: '#006400', fontWeight: 'bold' }}>
                                    R$ {orderSummary.subtotal.toFixed(2)}
                                </span>
                            </div>

                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginBottom: '5px',
                                paddingBottom: '5px',
                                borderBottom: '1px dotted #DDA0DD'
                            }}>
                                <span style={{ color: '#333333' }}>Frete:</span>
                                <span style={{ color: '#FF4500', fontWeight: 'bold' }}>
                                    R$ {orderSummary.shipping.toFixed(2)}
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
                                    Impostos:
                                </span>
                                <span style={{ color: '#8B0000', fontWeight: 'bold' }}>
                                    R$ {orderSummary.taxes.toFixed(2)}
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
                                    R$ {orderSummary.total.toFixed(2)}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Informações de segurança */}
                    <div style={{
                        backgroundColor: '#F0FFF0',
                        border: '2px solid #90EE90',
                        padding: '15px',
                        fontSize: '8px'
                    }}>
                        <h4 style={{
                            fontSize: '10px',
                            color: '#006400',
                            margin: '0 0 10px 0',
                            textAlign: 'center'
                        }}>
                            🔒 COMPRA 100% SEGURA 🔒
                        </h4>
                        <ul style={{ margin: 0, paddingLeft: '15px', color: '#333333' }}>
                            <li>✓ Site protegido por SSL</li>
                            <li>✓ Dados criptografados</li>
                            <li>✓ Certificado de segurança</li>
                            <li>✓ Proteção contra fraudes</li>
                            <li>✓ Política de privacidade</li>
                        </ul>
                        <p style={{
                            margin: '10px 0 0 0',
                            fontSize: '6px',
                            color: '#666666',
                            textAlign: 'center'
                        }}>
                            *Segurança não garantida em caso de invasão alien
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;