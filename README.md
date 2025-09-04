# 📚 Livraria Online (Projeto Educativo de UX/UI Ruim)

## 🎯 Objetivo

Este é um projeto educativo desenvolvido para ser usado em sala de aula como **material de estudo para análise de UX/UI**. O site simula um e-commerce de livros com **problemas intencionais de usabilidade e arquitetura da informação**.

## 🔴 Problemas Implementados Propositalmente

### 📋 Arquitetura da Informação
- **Menu confuso** com categorias embaralhadas e repetidas
- **Rotulagem pouco intuitiva** (ex: "Coisas", "Diversos", "Ofertas Especiais")
- **Hierarquia de navegação** pouco clara
- **Breadcrumbs** confusos e desnecessariamente complexos
- **Links quebrados** e que não levam para lugares relevantes

### 🎨 Design Visual
- **Cores que agridem os olhos** (combinações ruins de cores)
- **Tipografia inconsistente** (múltiplas fontes, tamanhos ruins)
- **Contrastes inadequados** (texto difícil de ler)
- **Elementos sobrepostos** e mal posicionados
- **Animações irritantes** (piscando, girando)

### 🔍 Usabilidade
- **Busca ineficaz** sem sugestões ou autocomplete
- **Filtros confusos** que não funcionam adequadamente
- **Carrinho escondido** e difícil de acessar
- **Botões mal posicionados** ou quase invisíveis
- **Formulários problemáticos** com campos sem labels claros

### 📱 Experiência do Usuário
- **Popups irritantes** que aparecem constantemente
- **Informações redundantes** e mal organizadas
- **Processo de checkout** confuso e longo
- **Feedback inadequado** para ações do usuário
- **Responsividade problemática**

## 🏗️ Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
├── pages/              # Páginas principais
│   ├── Home.jsx        # Página inicial com produtos
│   ├── Product.jsx     # Página de detalhes do produto
│   ├── ProductList.jsx # Listagem de produtos
│   ├── Cart.jsx        # Carrinho de compras
│   └── Checkout.jsx    # Finalização da compra
├── App.jsx             # Componente principal com navegação
├── App.css             # Estilos problemáticos
└── main.jsx            # Entrada da aplicação
```

## 🎓 Uso Educativo

### Para Professores:
1. **Análise de Problemas**: Use o site para que alunos identifiquem problemas de UX/UI
2. **Mapeamento de Site**: Criem um mapa da arquitetura atual
3. **Propostas de Melhoria**: Desenvolvam soluções para os problemas encontrados
4. **Redesign**: Proponham uma nova estrutura e design
5. **Prototipagem**: Criem protótipos das melhorias

### Para Alunos:
1. **Navegue pelo site** e documente todos os problemas encontrados
2. **Categorize os problemas** (navegação, visual, usabilidade, conteúdo)
3. **Priorize as correções** (crítico, importante, desejável)
4. **Proponha soluções** para cada problema identificado
5. **Crie wireframes** e mockups melhorados

## 🛠️ Tecnologias Utilizadas

- **React** - Biblioteca JavaScript para interfaces
- **React Router** - Roteamento de páginas
- **CSS Inline** - Estilos propositalmente ruins
- **Vite** - Ferramenta de build

## 🚀 Como Executar

1. **Clone o repositório**:
```bash
git clone https://github.com/desatinar/livraria-online-ruim.git
cd livraria-online-ruim
```

2. **Instale as dependências**:
```bash
npm install
```

3. **Execute o projeto**:
```bash
npm run dev
```

4. **Acesse no navegador**:
```
http://localhost:5173
```

## 📝 Exercícios Sugeridos

### Nível Básico:
- [ ] Liste 20 problemas de usabilidade encontrados
- [ ] Categorize os problemas por tipo
- [ ] Identifique os 5 problemas mais críticos

### Nível Intermediário:
- [ ] Crie um mapa do site atual
- [ ] Proponha uma nova estrutura de navegação
- [ ] Redesenhe a página inicial
- [ ] Melhore o processo de checkout

### Nível Avançado:
- [ ] Crie personas e jornadas de usuário
- [ ] Desenvolva um guia de estilo
- [ ] Faça testes de usabilidade
- [ ] Implemente as melhorias propostas

## 🎨 Exemplos de Problemas Encontrados

### 🔴 Problemas de Navegação:
- Menu com categorias confusas
- Links que levam para páginas erradas
- Carrinho difícil de encontrar
- Breadcrumbs desnecessariamente complexos

### 🔴 Problemas Visuais:
- Cores que machucam os olhos
- Texto muito pequeno ou grande
- Contrastes inadequados
- Layout desorganizado

### 🔴 Problemas de Conteúdo:
- Informações redundantes
- Textos confusos
- Falta de informações importantes
- Linguagem não amigável

## 📚 Material de Apoio

### Conceitos de UX/UI para estudar:
- **Arquitetura da Informação**
- **Design de Interação**
- **Usabilidade Web**
- **Acessibilidade**
- **Design Responsivo**
- **Psicologia das Cores**
- **Tipografia**
- **Grid Systems**

### Ferramentas Recomendadas:
- **Figma** - Para prototipagem
- **Miro/Mural** - Para mapeamento
- **Google Analytics** - Para análise
- **Hotjar** - Para testes de usabilidade

## 🤝 Contribuindo

Este é um projeto educativo! Contribuições são bem-vindas para:
- Adicionar novos problemas de UX/UI
- Melhorar a documentação
- Criar exercícios adicionais
- Traduzir para outros idiomas

## 📄 Licença

Este projeto é open source e está disponível sob a [Licença MIT](LICENSE).

## ⚠️ Aviso Importante

Este site foi desenvolvido **propositalmente** com problemas de UX/UI para fins educativos. **NÃO** use este código como referência para projetos reais de e-commerce.

---

**Desenvolvido com 💻 e muito ☕ para fins educativos**