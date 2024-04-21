# Pass.in API

## Descrição

Este é o backend da aplicação Pass.in. A API é construída com o framework Fastify e utiliza tecnologias como o TypeScript, Zod, SQLite e plugins para funcionalidades como documentação Swagger e validação de esquema JSON. 

## Requisitos

- Node.js
- npm 
- PrismaClient
- Zod

## Instalação

1. Clone o repositório:

    git clone https://github.com/owiltonlucas/nlw-unite

2. Configure o Banco de Dados

    Certifique-se de configurar corretamente o PrismaClient para interação com o banco de dados.

3. Inicie o servidor

    npm run dev

    O servidor estará disponível em [http://localhost:3333](http://localhost:3333).


## Endpoints

- `POST /create-event`: Cria um novo evento.
- `POST /register-for-event`: Registra um participante em um evento.
- `GET /get-event/:eventId`: Obtém informações sobre um evento específico.
- `GET /get-attendee-badge/:attendeeId`: Obtém o crachá de um participante.
- `POST /check-in/:attendeeId`: Realiza o check-in de um participante em um evento.
- `GET /get-event-attendees/:eventId`: Obtém a lista de participantes de um evento.

Para mais detalhes sobre os parâmetros e respostas de cada endpoint, consulte a documentação Swagger em [http://localhost:3333/docs](http://localhost:3333/docs).

## Estrutura do Projeto

- `routes/`: Contém os controladores para cada rota da API.
- `error-handler.js`: Gerenciamento de erros personalizado.
- `prisma/`: Configurações e modelos do PrismaClient.
- `schemas/`: Esquemas de validação utilizando Zod.

## Contribuição

Contribuições são bem-vindas! Se você quiser contribuir com melhorias, correções de bugs ou novos recursos para o projeto, sinta-se a vontade!!

## Licença

Este projeto está sob a licença MIT.
