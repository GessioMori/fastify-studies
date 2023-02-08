import { CreateUserInputType } from '@user/schemas';
import { CreateUserService } from '@user/services';
import { FastifyReply, FastifyRequest } from 'fastify';
import { container } from 'tsyringe';

export class CreateUserController {
  async handle(
    request: FastifyRequest<{ Body: CreateUserInputType }>,
    reply: FastifyReply
  ) {
    const { name, email, password } = request.body;
    const createUserService = container.resolve(CreateUserService);
    const user = await createUserService.execute({ name, email, password });
    return reply.status(201).send(user);
  }
}
