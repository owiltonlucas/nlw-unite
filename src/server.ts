import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUI, { fastifySwaggerUi } from '@fastify/swagger-ui';
import fastifyCors from '@fastify/cors';

import { serializerCompiler, validatorCompiler, jsonSchemaTransform } from 'fastify-type-provider-zod';
import { createEvent } from './routes/create-event';
import { registerForEvent } from './routes/register-for-event';
import { getEvent } from './routes/get-event';
import { getAttendeeBadge } from './routes/get-attendee-badge';
import { checkIn } from './routes/check-in';
import fastify from 'fastify'; 
import { getEventAttendees } from './routes/get-event-attendees';
import { errorHandler } from './error-handler';

const app = fastify(); 

app.register(fastifyCors,{
    origin: '*',
})

app.register(fastifySwagger, {
    swagger: {
        consumes: ['application/json'],
        produces: ['application/json'],
        info: {
            title: 'pass.in',
            description: 'Especificações da API para o back-end da aplicação pass.in',
            version: '1.0.0'  
        },
    },
    transform: jsonSchemaTransform,
})

app.register(fastifySwaggerUi, {
    routePrefix: '/docs',
})

app.setValidatorCompiler(validatorCompiler); // Definindo o compilador de validação
app.setSerializerCompiler(serializerCompiler); // Definindo o compilador de serialização

// Registrando cada rota como um plugin do Fastify
app.register(createEvent); // Registrando a rota de criação de evento como um plugin
app.register(registerForEvent); // Registrando a rota de registro em evento como um plugin
app.register(getEvent); // Registrando a rota de obtenção de evento como um plugin
app.register(getAttendeeBadge); // Registrando a rota de obtenção de crachá de participante como um plugin
app.register(checkIn); // Registrando a rota de check-in como um plugin
app.register(getEventAttendees);

app.setErrorHandler(errorHandler)

const { z } = require('zod'); // Importando o módulo Zod para validação de esquema
const { PrismaClient } = require('@prisma/client'); // Importando o PrismaClient para interação com o banco de dados

app.listen(3333, '0.0.0.0', (err) => {
    if (err) throw err;
    console.log('Servidor ouvindo em http://localhost:3333');
});