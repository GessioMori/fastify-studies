import { CreateUserController } from '@user/controllers';
import { $ref, CreateUserInputType } from '@user/schemas';
import { FastifyInstance } from 'fastify';

const createUserController = new CreateUserController();

export const userRoutes = (server: FastifyInstance, _opts: any, done: any) => {
  server.post(
    '/',
    {
      schema: {
        body: $ref('CreateUserInputSchema'),
        response: {
          201: $ref('UserResponseSchema')
        }
      }
    },
    createUserController.handle
  );

  done();
};
