import { PrismaUserRepository } from '@user/repositories/implementations/user.repository.prisma';
import { container } from 'tsyringe';

export function registerSingleton<T>(token: string, implementation: T) {
  container.register(token, { useValue: implementation });
}

container.registerSingleton('UserRepository', PrismaUserRepository);
