# Descrição

Este projeto é um desafio técnico para a posição de desenvolvedor Front-End na Start By WGSN

## Instruções de configuração e execução (Com Docker)

1. **Clone o Repositório**: 
   Clone o repositório para sua máquina local usando o seguinte comando:
   ```bash
   git clone git@github.com:sabinolopes/desafio-front-end-start.git
2. **Construa e Execute o Container Docker**:
    Navegue até o diretório do projeto (app) e execute o seguinte comando para construir e iniciar o container Docker:
   ```bash
   docker build -t desafio-start . 
   docker run -p 3000:3000 desafio-start
3. **Acesse a Aplicação**:
    Uma vez que o container esteja em execução, você pode acessar a aplicação em http://localhost:3000/ no seu navegador.

## Instruções de configuração e execução (Sem Docker)

1. **Clone o Repositório**: 
   Clone o repositório para sua máquina local usando o seguinte comando:
   ```bash
   git clone git@github.com:sabinolopes/desafio-front-end-start.git
2. **Instale as Dependências**:
    Navegue até o diretório do projeto (app) e instale as dependências usando npm:
    ```bash
    npm install
3. **Execute o Servidor Vite**:
   Você pode executá-lo usando:
    ```bash
    npm run dev

# Description

This project is a technical challenge for the Front-End developer position Start By WGSN

## Setup and running instructions (With Docker)

1. **Clone the Repository**: 
   Clone the repository to your local machine using the following command:
   ```bash
   git clone git@github.com:sabinolopes/desafio-front-end-start.git
2. **Build and Run the Docker Container**:
    Navigate to the project directory (app) and run the following command to build and start the Docker container:
   ```bash
   docker build -t desafio-start . 
   docker run -p 3000:3000 desafio-start
3. **Access the Application**:
    Once the container is up and running, you can access the application at http://localhost:3000/ in your web browser.

## Setup and running instructions (Without Docker)

1. **Clone the Repository**: 
   Clone the repository to your local machine using the following command:
   ```bash
   git clone git@github.com:sabinolopes/desafio-front-end-start.git
2. **Install Dependencies**:
    Navigate to the project directory (app) and install the dependencies using npm:
    ```bash
    npm install
3. **Run the Vite Server**:
   You can run it using:
    ```bash
    npm run dev
4. 