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
├── tests/                 # Diretório de testes
│   ├── unit/              # Testes unitários Jest
│   │   ├── index.test.js  # Arquivo de teste Jest para index.js
│   ├── e2e/               # Testes de ponta a ponta Cypress
│   │   ├── app_spec.js    # Arquivo de teste Cypress para a aplicação
├── README.md              # Instruções e documentação do projeto
```

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
├── tests/                 # Test directory
│   ├── unit/              # Jest unit tests
│   │   ├── index.test.js  # Jest test file for index.js
│   ├── e2e/               # Cypress end-to-end tests
│   │   ├── app_spec.js    # Cypress test file for the application
├── README.md              # Project instructions and documentation
```