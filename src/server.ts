import 'reflect-metadata';
import './utils/containers';
import { userRoutes } from '@user/routes';
import { userSchemas } from '@user/schemas';
import fastify from 'fastify';

const server = fastify({
  logger: true
});

const start = async () => {
  try {
    for (const schema of userSchemas) {
      server.addSchema(schema);
    }
    await server.register(userRoutes, { prefix: '/users' });
    await server.listen({ port: 3000 });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
