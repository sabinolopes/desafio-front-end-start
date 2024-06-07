# Desafio Front-End

## Conteúdo

- [Português](#português)
- [English](#english)

## Português

### Sobre o projeto

Este projeto é uma aplicação web que exibe uma seleção de produtos de perfumes e maquiagens. Abaixo estão as instruções para executar o projeto localmente.

Veja a implementação em Programação Orientada a Objetos em: `app/src/productManager.js`.

### Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina as seguintes ferramentas: Git, Docker (opcional) e Node.js.

### Instruções de configuração e execução

#### Com Docker

1. **Clone o Repositório**: 
   Clone o repositório para sua máquina local usando o seguinte comando:
   ```bash
   git clone git@github.com:sabinolopes/desafio-front-end-start.git
   ```
2. **Construa e Execute o Container Docker**:
    Navegue até o diretório do projeto (app) e execute o seguinte comando para construir e iniciar o container Docker:
   ```bash
   cd desafio-front-end-start/app
   docker build -t desafio-start . 
   docker run -p 3000:3000 desafio-start
   ```
3. **Acesse a Aplicação**:
    Uma vez que o container esteja em execução, você pode acessar a aplicação em http://localhost:3000/ no seu navegador.

#### Sem Docker

1. **Clone o Repositório**: 
   Clone o repositório para sua máquina local usando o seguinte comando:
   ```bash
   git clone git@github.com:sabinolopes/desafio-front-end-start.git
   ```
2. **Instale as Dependências**:
    Navegue até o diretório do projeto (app) e instale as dependências usando npm:
    ```bash
    cd desafio-front-end-start/app
    npm install
    ```
3. **Execute o Servidor Vite**:
   Você pode executá-lo usando:
    ```bash
    npm run dev
    ```

### Estrutura do Projeto

Aqui está uma visão geral da estrutura do projeto:

```
desafio-front-end-start/
├── app/
│   ├── assets/            # Contém imagens e ícones
│   ├── src/               # Código-fonte do projeto
│   │   ├── index.js       # Ponto de entrada do JavaScript
│   ├── styles/            # Arquivos CSS
│   │   ├── styles.css     # Estilos principais da aplicação
│   ├── index.html         # Estrutura HTML principal
│   ├── package.json       # Arquivo de configuração do npm
│   ├── Dockerfile         # Arquivo de configuração do Docker
│   ├── cypress/           # Diretório de testes Cypress
│   │   ├── e2e/           # Testes de integração Cypress
│   │   │   ├── spec.cy.js # Arquivo de teste Cypress para a aplicação
├── README.md              # Instruções e documentação do projeto
```

### Executando Testes

Antes de executar os testes, certifique-se de que a aplicação está rodando. Você pode rodar a aplicação usando Docker ou Vite.

**Usando Docker:**

1. Instale as dependências, incluindo Cypress:

```bash
npm install
```

2. Construa e execute o contêiner Docker:

```bash
docker build -t desafio-start . 
docker run -p 3000:3000 desafio-start
```

**Usando Vite:**

```bash
npm install
npm run dev
```

Uma vez que a aplicação está rodando, você pode abrir o Cypress Test Runner com o seguinte comando:

```bash
npm run cypress:open
```

Isso abrirá a interface do Cypress, onde você pode executar seus testes de ponta a ponta.

Se preferir rodar o Cypress pelo terminal, use o seguinte comando:

```bash
npm run test
```

Lembre-se, a aplicação deve estar rodando para que os testes do Cypress funcionem corretamente.

## English

# Front-End Challenge

## About the Project

This project is a web application that showcases a selection of perfume and makeup products. Below are the instructions for running the project locally.

See the Object-Oriented Programming implementation at: `app/src/productManager.js`.

## Prerequisites

Before you start, you will need to have the following tools installed on your machine: Git, Docker (optional), and Node.js.

## Setup and Running Instructions

### With Docker

1. **Clone the Repository**: 
   Clone the repository to your local machine using the following command:
   ```bash
   git clone git@github.com:sabinolopes/desafio-front-end-start.git
   ```
2. **Build and Run the Docker Container**:
    Navigate to the project directory (app) and run the following command to build and start the Docker container:
   ```bash
   cd desafio-front-end-start/app
   docker build -t desafio-start . 
   docker run -p 3000:3000 desafio-start
   ```
3. **Access the Application**:
    Once the container is running, you can access the application at http://localhost:3000/ in your browser.

### Without Docker

1. **Clone the Repository**: 
   Clone the repository to your local machine using the following command:
   ```bash
   git clone git@github.com:sabinolopes/desafio-front-end-start.git
   ```
2. **Install Dependencies**:
    Navigate to the project directory (app) and install the dependencies using npm:
    ```bash
    cd desafio-front-end-start/app
    npm install
    ```
3. **Run the Vite Server**:
   You can run it using:
    ```bash
    npm run dev
    ```
### Project Structure

Here is an overview of the project structure:

```
front-end-challenge-start/
├── app/
│   ├── assets/            # Contains images and icons
│   ├── src/               # Project source code
│   │   ├── index.js       # JavaScript entry point
│   ├── styles/            # CSS files
│   │   ├── styles.css     # Main application styles
│   ├── index.html         # Main HTML structure
│   ├── package.json       # npm configuration file
│   ├── Dockerfile         # Docker configuration file
│   ├── cypress/           # Cypress test directory
│   │   ├── e2e/           # Cypress end-to-end tests
│   │   │   ├── spec.cy.js # Cypress test file for the application
├── README.md              # Project instructions and documentation
```

### Running Tests

Before running the tests, make sure the application is running. You can run the application using Docker or Vite.

**Using Docker:**

1. Install the dependencies, including Cypress:

```bash
npm install
```

2. Build and run the Docker container:

```bash
docker build -t desafio-start . 
docker run -p 3000:3000 desafio-start
```

**Using Vite:**

```bash
npm install
npm run dev
```

Once the application is running, you can open the Cypress Test Runner with the following command:

```bash
npm run cypress:open
```

This will open the Cypress interface, where you can run your end-to-end tests.

If you prefer to run Cypress from the terminal, use the following command:

```bash
npm run test
```

Remember, the application must be running for Cypress tests to work correctly.