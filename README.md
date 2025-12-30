# FxCustomImage

Uma aplicação web para criação de imagens personalizadas com sobreposição de texto, projetada para gerar cards e stories em formato vertical.

## Descrição

O FxCustomImage é um editor de imagens baseado em canvas que permite aos usuários criar imagens personalizadas adicionando texto sobre fundos pré-definidos. A aplicação é otimizada para a criação de stories no formato 1080x1920 (9:16), comum em plataformas como Instagram.

## Funcionalidades

- **Sobreposição de Texto**: Adicione texto personalizado sobre imagens de fundo
- **Estilização Avançada**: Controle de cor, tamanho, fonte e maiúsculas
- **Posicionamento Preciso**: Ajuste horizontal e vertical do texto via sliders
- **Modelos de Fundo**: Seleção de fundos pré-configurados
- **Download HD**: Exportação da imagem final em formato PNG
- **Interface Responsiva**: Design moderno com Tailwind CSS

## Tecnologias Utilizadas

- **Frontend**: React 19.2.3 com TypeScript
- **Build Tool**: Vite 6.2.0
- **Styling**: Tailwind CSS
- **Canvas API**: Para renderização e manipulação de imagens
- **Containerização**: Docker e Docker Compose
- **Fontes**: Google Fonts (Inter, Montserrat)

## Estrutura do Projeto

```
FxCustomImage/
├── components/
│   ├── Header.tsx          # Cabeçalho da aplicação
│   ├── ImageEditor.tsx     # (Não implementado)
│   └── Sidebar.tsx         # Painel lateral de controles
├── src/
│   └── assets/             # Recursos estáticos (imagens, favicon)
├── App.tsx                 # Componente principal
├── constants.ts            # Constantes e configurações
├── index.html              # Template HTML
├── index.tsx               # Ponto de entrada React
├── package.json            # Dependências e scripts
├── types.ts                # Definições de tipos TypeScript
├── vite.config.ts          # Configuração do Vite
├── Dockerfile              # Configuração Docker
├── docker-compose.yml      # Orquestração de containers
└── tsconfig.json           # Configuração TypeScript
```

## Instalação e Configuração

### Pré-requisitos

- Node.js 20+
- Docker (opcional, para execução em container)

### Instalação Local

1. Clone o repositório:
   ```bash
   git clone <repository-url>
   cd FxCustomImage
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Acesse `http://localhost:3000` no navegador.

### Execução com Docker

1. Construa e execute com Docker Compose:
   ```bash
   docker-compose up --build
   ```

2. A aplicação estará disponível em `http://localhost:3000`.

## Uso

1. **Adicionar Texto**: Digite o nome no campo "Nome no Card" (máximo 30 caracteres).

2. **Personalizar Estilo**:
   - Selecione a cor do texto (pré-definidas ou personalizada)
   - Ajuste o tamanho da fonte
   - Escolha a família da fonte
   - Ative/desative maiúsculas

3. **Posicionar Texto**: Use os sliders para ajustar a posição vertical e horizontal.

4. **Selecionar Fundo**: Clique em um dos modelos de fundo disponíveis.

5. **Download**: Clique em "BAIXAR IMAGEM" para salvar a imagem em PNG.

## Configurações

### Constantes Principais

- **Dimensões do Canvas**: 1080x1920 pixels (formato story)
- **Fontes Disponíveis**: Montserrat, Arial, Georgia, Courier New, Verdana
- **Cores Pré-definidas**: Azul (#204399), Preto (#000000), Dourado (#ad8b51)

### Variáveis de Ambiente

Para funcionalidades futuras (ex: integração com Gemini API), crie um arquivo `.env.local`:

```
GEMINI_API_KEY=your_api_key_here
```

## Desenvolvimento

### Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Gera build de produção
- `npm run preview`: Visualiza o build de produção

### Estrutura de Componentes

- **App**: Gerencia estado global e renderiza layout principal
- **Sidebar**: Contém todos os controles de edição
- **Header**: Barra superior (atualmente vazia)

## Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## Licença

Este projeto é privado e confidencial.